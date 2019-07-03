"use strict";

import {fmi_weather_api} from "../weather-api/weather-api.js";
import {CitySelector} from "./CitySelector.js";
import {WeatherCardDisplay} from "./WeatherCardDisplay.js";

// Displays a weather forecast for the given cities, deriving its data from the open data
// API of the Finnish Meteorological Institute.
export function WeatherApp(props = {/*cities = [""]*/})
{
    // Initialize the weather display to the first item in the CitySelector's list.
    create_weather_display(props.cities[0]);

    const citySelector = React.createElement(CitySelector,
    {
        selectionCallback: create_weather_display,
        label: "A weather forecast for the next 24 hours in ",
        cities: props.cities,
    });

    return React.createElement(React.Fragment, {},
                               citySelector,
                               React.createElement("div", {id: "weather-display"}));

    // Create and display a set of weather cards, each showing the weather conditions at
    // a particular time.
    async function create_weather_display(cityName = "")
    {
        const weatherData = await fmi_weather_api().get_forecast(
        {
            place: cityName,
            timeStepHr: 3,
            numForecasts: 8,
        });

        const weatherCardDisplay = React.createElement(WeatherCardDisplay, {weatherData});

        ReactDOM.render(weatherCardDisplay, document.getElementById("weather-display"));
    }
}
