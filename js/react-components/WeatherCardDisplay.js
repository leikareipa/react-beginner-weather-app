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
            weatherSymbolId: data.weatherSymbol3,
            temperatureDisplayScale: props.temperatureDisplayScale,
        });
    });

    return React.createElement("div", {className:"WeatherCardDisplay"}, ...weatherCards);
}
