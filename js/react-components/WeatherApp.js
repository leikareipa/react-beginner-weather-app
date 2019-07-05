"use strict";

import {WeatherCardDisplay} from "./WeatherCardDisplay.js";
import {TemperatureScaleSelector} from "./TemperatureScaleSelector.js";

// Displays the given weather data for the given city.
export function WeatherApp(props = {/*city = "", weatherData = [{}]*/})
{
    const [temperatureDisplayScale, setTemperatureDisplayScale] = React.useState("celsius");

    if (typeof props.city !== "string" ||
        !Array.isArray(props.weatherData) ||
        !props.weatherData.length)
    {
        return React.createElement("div", {style:{fontStyle:"italic"}}, `No weather data found for \"${props.city}\".`);
    }
    else
    {
        return React.createElement(React.Fragment, {},
                                   React.createElement("div", {className:"Header"},
                                       React.createElement("div", {className:"Title"}, props.title),
                                       React.createElement(TemperatureScaleSelector,
                                       {
                                           temperatureDisplayScale,
                                           selectCallback: setTemperatureDisplayScale,
                                           scales:
                                           [
                                               {scaleName: "celsius", scaleSymbol: "C"},
                                               {scaleName: "fahrenheit", scaleSymbol: "F"},
                                               {scaleName: "kelvin", scaleSymbol: "K"},
                                           ],
                                       })),
                                   React.createElement(WeatherCardDisplay,
                                   {
                                       temperatureDisplayScale,
                                       weatherData: props.weatherData,
                                   }));
    }
}
