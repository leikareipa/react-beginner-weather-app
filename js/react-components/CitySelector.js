"use strict";

// Displays a drop-down list of cities for which to display the weather.
export function CitySelector({label, cities, create_weather_display})
{
    const optionElements = cities.sort().map(city=>React.createElement("option", {}, city));

    // Initialize the weather display to the first item in the drop-down options list.
    create_weather_display(cities[0]);

    return React.createElement("div", {onChange:(event)=>create_weather_display(event.target.value)}, label,
                               React.createElement("select", {}, ...optionElements));
}
