"use strict";

import {WeatherCard} from "./WeatherCard.js";

// Creates and displays a set of weather cards that show information about the weather at
// given points in time. Takes in an array containing the weather data to put into each
// card.
export function WeatherCardDisplay(props = {/*weatherData = [{}], temperatureDisplayScale = ""*/})
{
    const weatherCards = props.weatherData.map((data, idx)=>
    {
        return React.createElement(WeatherCard,
        {
            key: idx,
            timestamp: data.timestamp,
            temperatureC: data.temperature,
            weatherSymbolId: data.weathersymbol3,
            temperatureDisplayScale: props.temperatureDisplayScale,

            /// Temporary vertical styling.
            style:
            {
               // bottom: data.temperature*8+"px",
            },
        });
    });

    return React.createElement("div", {className:"WeatherCardDisplay"}, ...weatherCards);
}
