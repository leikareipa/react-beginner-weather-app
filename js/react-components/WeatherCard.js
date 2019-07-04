"use strict";

import {TemperatureString} from "./TemperatureString.js";
import {WeatherSymbol} from "./WeatherSymbol.js";

// Displays a card containing weather information, like temperature and a graphic
// illustrating the current weather conditions (sunny, rainy, cloudy, etc.).
export function WeatherCard(props = {/*style, temperatureC, temperatureDisplayScale, weatherSymbolId, timestamp*/})
{
    const hr = String(new Date(props.timestamp).getHours());
    const m = String(new Date(props.timestamp).getMinutes());

    return React.createElement("div", {className:"WeatherCard", style:props.style},
                               React.createElement(WeatherSymbol,
                               {
                                   weatherSymbolId: props.weatherSymbolId,
                               }),
                               React.createElement(TemperatureString,
                               {
                                   temperatureC: props.temperatureC,
                                   temperatureDisplayScale: props.temperatureDisplayScale,
                                   showTemperatureScaleSymbol: false,
                               }),
                               React.createElement("div", {style:{color:"rgba(0, 0, 0, 0.4)", fontSize:"80%"}}, `${hr.padStart(2, "0")}:${m.padStart(2, "0")}`));
}
