"use strict";

// Displays as a string the given temperature along with its symbol; e.g. "25 °C".
// Supports three temperature scales: Celsius, Fahrenheit, and Kelvin. Note that
// the temperature will be displayed as a rounded integer; such that e.g. 28.8 will
// be shown as 29, and 28.3 as 28.
//
// You can provide the temperature on one of the supported scales, and the component
// will automatically convert its value onto the other supported scales. E.g. if
// you pass in props.celsius = 25, the component will populate the Fahrenheit and
// Kelvin (and any other supported scales') fields with values converted from the
// Celsius reading.
//
// The component will by default display the temperature reading on the scale in
// which it was originally provided. E.g. passing in props.celsius = 25 will cause
// the component to display the temperature on the Celsius scale, by default.
//
// If the temperature value is provided on more than one scale (e.g. props.celsius
// = 25 && props.fahrenheit = 77), the other scales' values will be overwritten by
// the conversion from the default scale.
export function TemperatureString(props = {celsius, fahrenheit, kelvin})
{
    const temperatureScales =
    {
        celsius:    {value: Math.round(props.celsius),    symbol: "°C"},
        fahrenheit: {value: Math.round(props.fahrenheit), symbol: "°F"},
        kelvin:     {value: Math.round(props.kelvin),     symbol: "°K"},
    };

    // Derive the other temperature scales from the one given as a prop.
    const [currentTemperatureScale, setCurrentTemperatureScale] = React.useState((()=>
    {
        if (typeof props.celsius !== "undefined")
        {
            temperatureScales.fahrenheit.value = Math.round(props.celsius * 9/5 + 32);
            temperatureScales.kelvin.value = Math.round(props.celsius + 273.15);

            return "celsius";
        }

        if (typeof props.fahrenheit !== "undefined")
        {
            temperatureScales.celsius.value = Math.round((props.fahrenheit - 32) * 5/9);
            temperatureScales.kelvin.value = Math.round((props.fahrenheit - 32) * 5/9 + 273.15);

            return "fahrenheit";
        }

        if (typeof props.kelvin !== "undefined")
        {
            temperatureScales.celsius.value = Math.round(props.kelvin - 273.15);
            temperatureScales.fahrenheit.value = Math.round((props.kelvin - 273.15) * 9/5 + 32);

            return "kelvin";
        }

        return null;
    })());

    return React.createElement("span", {}, `${temperatureScales[currentTemperatureScale].value}°`);
}
