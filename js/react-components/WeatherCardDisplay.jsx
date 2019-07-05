/*
 * 2019 Tarpeeksi Hyvae Soft
 * Beginner weather app in React
 * 
 */

"use strict";

import {WeatherCard} from "./WeatherCard.js";

// Creates and displays a set of weather cards that show information about the weather at
// given points in time. Takes in an array containing the weather data to put into each
// card.
export function WeatherCardDisplay(props = {/*weatherData = [{}], temperatureDisplayScale = ""*/})
{
    const weatherCards = props.weatherData.map((data, idx)=>
    {
        return <WeatherCard key={idx}
                            timestamp={data.timestamp}
                            temperatureC={data.temperature}
                            weatherSymbolId={data.weatherSymbol3}
                            temperatureDisplayScale={props.temperatureDisplayScale}>
               </WeatherCard>
    });

    return <div className="WeatherCardDisplay">{weatherCards}</div>
}
