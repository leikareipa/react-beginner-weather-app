/*
 * 2019 Tarpeeksi Hyvae Soft
 * Beginner weather app in React
 * 
 */

"use strict";

import {WeatherCardDisplay} from "./WeatherCardDisplay.js";
import {TemperatureScaleSelector} from "./TemperatureScaleSelector.js";

// Displays the given weather data for the given place (e.g. city).
export function WeatherApp(props = {/*place = "", weatherData = [{}]*/})
{
    const [temperatureDisplayScale, setTemperatureDisplayScale] = React.useState("celsius");

    if (typeof props.place !== "string" ||
        !Array.isArray(props.weatherData) ||
        !props.weatherData.length)
    {
        return React.createElement("div", {style:{fontStyle:"italic"}}, `No weather information for \"${props.place}\".`);
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
