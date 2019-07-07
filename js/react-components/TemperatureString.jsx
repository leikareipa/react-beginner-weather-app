/*
 * 2019 Tarpeeksi Hyvae Soft
 * Beginner weather app in React
 * 
 */

"use strict";

// Displays as a string the given temperature; f.e. "25°" (without the temperature
// scale symbol), or "25 °C" (with the temperature scale symbol). Note that the
// temperature will be displayed as a rounded integer; such that e.g. 28.8 will
// display as 29, and 28.3 as 28.
export function TemperatureString(props = {/*temperatureC, temperatureDisplayScale, showTemperatureScaleSymbol*/})
{
    return <div className="TemperatureString">{temperature_as_string()}</div>

    function temperature_as_string()
    {
        const [temperature, scaleSymbol] = (()=>
        {
            switch (props.temperatureDisplayScale)
            {
                case "celsius": return [Math.round(props.temperatureC), "C"];
                case "fahrenheit": return [Math.round((props.temperatureC * 1.8) + 32), "F"];
                case "kelvin": return [Math.round(props.temperatureC + 273.15), "K"];
                default: return [-1, "?"];
            }
        })();

        if (props.showTemperatureScaleSymbol)
        {
            return `${temperature} °${scaleSymbol}`;
        }
        else
        {
            return `${temperature}°`;
        }
    }
}
