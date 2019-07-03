"use strict";

import {WeatherCardDisplay} from "./WeatherCardDisplay.js";

// Displays the given weather data for the given city.
export function WeatherApp(props = {/*city = "", weatherData = [{}]*/})
{
    if (typeof props.city !== "string" ||
        !Array.isArray(props.weatherData) ||
        !props.weatherData.length)
    {
        return React.createElement("p", {style:{fontStyle:"italic"}}, `No weather data found for \"${props.city}\".`);
    }
    else
    {
        /// FIXME: Placeholder implementation. 
        const capitalizedCityName = (props.city[0].toUpperCase() + props.city.slice(1));

        return React.createElement(React.Fragment, {},
                                   React.createElement("div", {id:"title"},
                                       React.createElement(React.Fragment, {}, "A weather forecast for the next 24 hours in "),
                                       React.createElement("span", {style:{fontWeight:"bold"}}, capitalizedCityName)),
                                   React.createElement(WeatherCardDisplay, {weatherData: props.weatherData}));
    }
}
