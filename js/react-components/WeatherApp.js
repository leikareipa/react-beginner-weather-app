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
        return React.createElement("p", {style:{fontStyle:"italic"}}, `No weather data found for \"${props.city}\".`);
    }
    else
    {
        /// FIXME: Placeholder implementation. 
        const capitalizedCityName = (props.city[0].toUpperCase() + props.city.slice(1).toLowerCase());

        const title = React.createElement("span", {className:"label"},
                                          React.createElement("span", {}, "Weather forecast for "),
                                          React.createElement("span",
                                          {
                                              style:
                                              {
                                                  fontWeight: "bold",
                                              },
                                          }, capitalizedCityName));

        return React.createElement(React.Fragment, {},
                                   React.createElement("div", {className:"title"},
                                       title,
                                       React.createElement(TemperatureScaleSelector,
                                       {
                                           temperatureDisplayScale,
                                           selectionCallback: setTemperatureDisplayScale,
                                           style:
                                           {
                                               marginLeft: "13px",
                                           },
                                       })),
                                   React.createElement(WeatherCardDisplay, {temperatureDisplayScale, weatherData: props.weatherData}));
    }
}
