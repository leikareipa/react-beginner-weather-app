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
        /// FIXME: Placeholder implementation of ensuring proper capitalization of the user-
        ///        facing city name.
        const capitalizedCityName = (props.city[0].toUpperCase() + props.city.slice(1).toLowerCase());

        return React.createElement(React.Fragment, {},
                                   React.createElement("div", {className:"title"},
                                       React.createElement("span", {className:"label"},
                                                            React.createElement("span", {}, "Weather forecast for "),
                                                            React.createElement("span", {style:{fontWeight:"bold"},}, capitalizedCityName)),
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
                                   React.createElement(WeatherCardDisplay, {temperatureDisplayScale, weatherData:props.weatherData}));
    }
}
