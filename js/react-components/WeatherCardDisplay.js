"use strict";

import {WeatherCard} from "./WeatherCard.js";

// Creates and displays a set of weather cards that show information about the weather at
// given points in time. Takes in an array containing the weather data to put into each
// card.
export function WeatherCardDisplay(props = {/*weatherData = [{}}*/})
{
    const weatherCards = props.weatherData.map((c, idx)=>
    {
        return React.createElement(WeatherCard,
        {
            key: idx,
            temperatureC: props.weatherData[idx].temperature,
            weatherSymbolId: props.weatherData[idx].weathersymbol3,
            initialTemperatureDisplayScale: "celsius",

            /// Temporary vertical styling.
            style:
            {
                bottom: props.weatherData[idx].temperature*8+"px",
            },
        });
    });

    return React.createElement(React.Fragment, {}, ...weatherCards);
}
