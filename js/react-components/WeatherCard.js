"use strict";

import {Temperature} from "./Temperature.js";
import {WeatherImage} from "./WeatherImage.js";

// Displays a card containing weather information, like temperature and a graphic
// illustrating the current weather conditions (sunny, rainy, cloudy, etc.).
export function WeatherCard(props = {})
{
    return React.createElement("div", {id:"weather-card"},
                React.createElement(WeatherImage, props),
                React.createElement("br"), /// Temporary hack.
                React.createElement(Temperature, props));
}
