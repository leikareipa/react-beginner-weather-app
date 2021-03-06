/*
 * 2019 Tarpeeksi Hyvae Soft
 * Beginner weather app in React
 * 
 */

"use strict";

import {TemperatureString} from "./TemperatureString.js";
import {WeatherSymbol} from "./WeatherSymbol.js";

// Displays a card containing weather information, like temperature and a graphic
// illustrating the current weather conditions (sunny, rainy, cloudy, etc.).
export function WeatherCard(props = {/*style, temperatureC, temperatureDisplayScale, weatherSymbolId, timestamp*/})
{
    const hr = String(new Date(props.timestamp).getHours());
    const m = String(new Date(props.timestamp).getMinutes());

    return <div className="WeatherCard">
               <WeatherSymbol weatherSymbolId={props.weatherSymbolId}
                              isNight={(hr > 20) || (hr < 6)}> /// TODO: Adjust for current length of day.
               </WeatherSymbol>
               <TemperatureString temperatureC={props.temperatureC}
                                  temperatureDisplayScale={props.temperatureDisplayScale}
                                  showTemperatureScaleSymbol={false}>
               </TemperatureString>
               <div className="Timestamp">{hr.padStart(2, "0")}:{m.padStart(2, "0")}</div>
           </div>
}
