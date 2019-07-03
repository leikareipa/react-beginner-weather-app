"use strict";

// Displays a drop-down list of cities for which to display the weather.
export function CitySelector({label, cities, selectionCallback})
{
    const optionElements = cities.sort().map(city=>React.createElement("option", {}, city));

    return React.createElement("div", {id:"city-selector", onChange:(event)=>selectionCallback(event.target.value)}, label,
                               React.createElement("select", {}, ...optionElements));
}
