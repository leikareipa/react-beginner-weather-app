"use strict";

import {TemperatureString} from "./TemperatureString.js";
import {WeatherSymbol} from "./WeatherSymbol.js";

// Displays a card containing weather information, like temperature and a graphic
// illustrating the current weather conditions (sunny, rainy, cloudy, etc.).
export function WeatherCard(props = {/*style, temperatureC, initialTemperatureDisplayScale, weatherSymbolId*/})
{
    const [temperatureDisplayScale, setTemperatureDisplayScale] = React.useState(props.initialTemperatureDisplayScale);

    /// Looks a bit messy without JSX, eh?
    return React.createElement("div",
    {
        className: "WeatherCard",
        style: props.style,

        /// Temporary functionality to test toggling the temperature display scale.
        onClick: ()=>setTemperatureDisplayScale(temperatureDisplayScale === "celsius"? "fahrenheit" : "celsius"),
    }, React.createElement(WeatherSymbol, {weatherSymbolId:props.weatherSymbolId}),
       React.createElement(TemperatureString, {temperatureC:props.temperatureC, temperatureDisplayScale, showTemperatureScaleSymbol:false}));
}
