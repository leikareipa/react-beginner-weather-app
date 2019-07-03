"use strict";

import {TemperatureString} from "./TemperatureString.js";
import {WeatherImage} from "./WeatherImage.js";

// Displays a card containing weather information, like temperature and a graphic
// illustrating the current weather conditions (sunny, rainy, cloudy, etc.).
export function WeatherCard(props = {})
{
    return React.createElement("div", {id:"weather-card", style:{bottom:props.celsius*8+"px"}}, /// Temporary vertical styling.
                React.createElement(WeatherImage, props),
                React.createElement("br"), /// Temporary hack.
                React.createElement(TemperatureString, props));
}
