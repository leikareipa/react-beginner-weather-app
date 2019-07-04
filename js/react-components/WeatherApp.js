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
        /// FIXME: Placeholder implementation for ensuring proper capitalization of the city name. 
        const capitalizedCityName = (props.city[0].toUpperCase() + props.city.slice(1).toLowerCase());

        return React.createElement(React.Fragment, {},
                                   React.createElement("div", {className:"title"},
                                       React.createElement("span", {className:"label"},
                                                            React.createElement("span", {}, "Weather forecast for "),
                                                            React.createElement("span", {style:{fontWeight:"bold"},}, capitalizedCityName)),
                                       React.createElement(TemperatureScaleSelector,
                                       {
                                           temperatureDisplayScale,
                                           selectionCallback: setTemperatureDisplayScale,
                                           style: {marginLeft: "18px", fontSize:"80%"},
                                       })),
                                   React.createElement(WeatherCardDisplay, {temperatureDisplayScale, weatherData:props.weatherData}));
    }
}
