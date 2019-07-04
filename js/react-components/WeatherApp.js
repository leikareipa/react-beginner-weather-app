"use strict";

import {WeatherCardDisplay} from "./WeatherCardDisplay.js";

// Displays the given weather data for the given city.
export function WeatherApp(props = {/*city = "", weatherData = [{}]*/})
{
    const [temperatureDisplayScale, setTemperatureDisplayScale] = React.useState("celsius");

    if (typeof props.city !== "string" ||
        !Array.isArray(props.weatherData) ||
        !props.weatherData.length)
    {
        return React.createElement("p", {style:{fontStyle:"italic"}}, `No weather data found for \"${props.city}\".`);
    }
    else
    {
        /// FIXME: Placeholder implementation. 
        const capitalizedCityName = (props.city[0].toUpperCase() + props.city.slice(1).toLowerCase());

        const title = React.createElement("span", {id:"title"},
                                          React.createElement("span", {}, "A weather forecast for "),
                                          React.createElement("span",
                                          {
                                              style:
                                              {
                                                  fontWeight: "bold",
                                              },
                                          }, capitalizedCityName));

        const temperatureScaleSelector = React.createElement("span", {id:"temperature-scale-selector"},
                                                             React.createElement("span", {style:{marginLeft: "11px"}}, "("),
                                                             React.createElement("span",
                                                             {
                                                                 style:
                                                                 {
                                                                     cursor: (temperatureDisplayScale !== "celsius"? "pointer" : "default"), 
                                                                 },
                                                                 onClick:()=>setTemperatureDisplayScale("celsius"),
                                                             }, "°C"),
                                                             React.createElement("span", {}, " | "),
                                                             React.createElement("span",
                                                             {
                                                                 style:
                                                                 {
                                                                    cursor: (temperatureDisplayScale !== "fahrenheit"? "pointer" : "default"), 
                                                                 },
                                                                 onClick:()=>setTemperatureDisplayScale("fahrenheit"),
                                                             }, "°F"),
                                                             React.createElement("span", {}, ")"));

        return React.createElement(React.Fragment, {},
                                   title,
                                   temperatureScaleSelector,
                                   React.createElement(WeatherCardDisplay, {temperatureDisplayScale, weatherData: props.weatherData}));
    }
}
