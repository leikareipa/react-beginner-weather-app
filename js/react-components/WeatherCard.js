"use strict";

import {TemperatureString} from "./TemperatureString.js";
import {WeatherSymbol} from "./WeatherSymbol.js";

// Displays a card containing weather information, like temperature and a graphic
// illustrating the current weather conditions (sunny, rainy, cloudy, etc.).
export function WeatherCard({temperatureC, initialTemperatureDisplayScale, weatherSymbolId})
{
    const [temperatureDisplayScale, setTemperatureDisplayScale] = React.useState(initialTemperatureDisplayScale);

    /// Looks a bit messy without JSX, eh?
    return React.createElement("div",
    {
        id:"weather-card",

        /// Temporary functionality to test toggling the temperature display scale.
        onClick:()=>setTemperatureDisplayScale(temperatureDisplayScale === "celsius"? "fahrenheit" : "celsius"),

        /// Temporary vertical styling.
        style:
        {
            bottom: temperatureC*8+"px",
        }
    }, React.createElement(WeatherSymbol, {weatherSymbolId}),
       React.createElement("br"), /// Temporary hack.
       React.createElement(TemperatureString, {temperatureC, temperatureDisplayScale, showTemperatureScaleSymbol:false}));
}
