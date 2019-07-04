"use strict";

import {TemperatureString} from "./TemperatureString.js";
import {WeatherSymbol} from "./WeatherSymbol.js";

// Displays a card containing weather information, like temperature and a graphic
// illustrating the current weather conditions (sunny, rainy, cloudy, etc.).
export function WeatherCard(props = {/*style, temperatureC, temperatureDisplayScale, weatherSymbolId*/})
{
    return React.createElement("div", {className:"WeatherCard", style:props.style,},
                               React.createElement(WeatherSymbol,
                               {
                                   weatherSymbolId: props.weatherSymbolId,
                               }),
                               React.createElement(TemperatureString,
                               {
                                   temperatureC: props.temperatureC,
                                   temperatureDisplayScale: props.temperatureDisplayScale,
                                   showTemperatureScaleSymbol: false,
                               }));
}
