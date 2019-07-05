"use strict";

// Displays a selectable list of the given temperature scales; e.g. "°C °F °K". The given
// callback function will be notified when the user clicks on one of the list elements.
export function TemperatureScaleSelector(props = {/*scales = [{}], temperatureDisplayScale, selectCallback = ()=>{}*/})
{
    return React.createElement("div", {className:"TemperatureScaleSelector"},
                               props.scales.map(scale=>make_selector_element(scale.scaleName, scale.scaleSymbol)));

    function make_selector_element(scaleName = "celsius", scaleSymbol = "C")
    {
        return React.createElement("span",
        {
            key: scaleSymbol,
            onClick: ()=>props.selectCallback(scaleName.toLowerCase()),
            className: "TemperatureScaleSelectorElement " +
                       ((props.temperatureDisplayScale === scaleName.toLowerCase())? "active" : "inactive"),
        }, `°${scaleSymbol}`);
    }
}
