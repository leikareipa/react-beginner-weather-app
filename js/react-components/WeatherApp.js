"use strict";

import {fmi_weather_api} from "../weather-api/weather-api.js";
import {CitySelector} from "./CitySelector.js";
import {WeatherCard} from "./WeatherCard.js";

// Displays a weather forecast for the given cities, deriving its data from the open data
// API of the Finnish Meteorological Institute.
export function WeatherApp(props = {/*cities = [""]*/})
{
    // Initialize the weather display to the first item in the drop-down options list.
    create_weather_display(props.cities[0]);

    const citySelector = React.createElement(CitySelector,
    {
        selectionCallback: create_weather_display,
        label: "A weather forecast for the next 24 hours in ",
        cities: props.cities,
    });

    return React.createElement("div", {},
                               citySelector,
                               React.createElement("div", {id: "weather-display"}));

    // Create and display a set of weather cards, each showing the weather conditions
    // at a particular time.
    async function create_weather_display(cityName = "")
    {
        const maxNumCards = 8;
        const weatherEntries = await fmi_weather_api().get_forecast(
        {
            place: cityName,
            timeStepHr: 3,
            numForecasts: maxNumCards,
        });

        // Add the weather entries as cards into the UI.
        {
            const cardArray = !weatherEntries.length?
                                [React.createElement("p", {key:0}, "No weather data to display.")]
                                : new Array(Math.min(maxNumCards, weatherEntries.length)).fill().map((c, idx)=>
            {
                return React.createElement(WeatherCard,
                {
                    key: idx,
                    temperatureC: weatherEntries[idx].temperature,
                    weatherSymbolId: weatherEntries[idx].weathersymbol3,
                    initialTemperatureDisplayScale: "celsius",
                });
            });

            ReactDOM.render(cardArray, document.getElementById("weather-display"));
        }
    }
}
