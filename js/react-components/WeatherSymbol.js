/*
 * 2019 Tarpeeksi Hyvae Soft
 * Beginner weather app in React
 * 
 */

"use strict";

// Displays a graphic indicating a weather condition - like sunny, cloudy, rainy, etc.
// Takes as input a WeatherSymbol3 value as returned by FMI's open data weather API for
// the fmi::forecast::hirlam::surface::point::multipointcoverage query.
export function WeatherSymbol(props = {/*weatherSymbolId, isNight*/})
{
    return React.createElement("img",
    {
        className: "WeatherSymbol",
        title: imageDescription(props.weatherSymbolId),
        src: imageUrl(props.weatherSymbolId),
    });

    // Returns a textual description of the given symbol. Copied from
    // https://web.archive.org/web/20170717150205/http://en.ilmatieteenlaitos.fi/weather-symbols.
    function imageDescription(symbolId = 0)
    {
        switch (symbolId)
        {
            case 1:  return "Clear";
            case 2:  return "Partly cloudy";
            case 21: return "Light rain showers";
            case 22: return "Rain showers";
            case 23: return "Heavy rain showers";
            case 3:  return "Cloudy";
            case 31: return "Light rain";
            case 32: return "Rain";
            case 33: return "Heavy rain";
            case 41: return "Light snow showers";
            case 42: return "Snow showers";
            case 43: return "Heavy snow showers";
            case 51: return "Light snowfall";
            case 52: return "Snowfall";
            case 53: return "Heavy snowfall";
            case 61: return "Thundershowers";
            case 62: return "Strong thundershowers";
            case 63: return "Thunder";
            case 64: return "Heavy thunder";
            case 71: return "Light sleet showers";
            case 72: return "Sleet showers";
            case 73: return "Heavy sleet showers";
            case 81: return "Light sleet";
            case 82: return "Sleet";
            case 83: return "Heavy sleet";
            case 91: return "Haze"
            case 92: return "Fog"
            default: return "";
        }
    }

    // Returns a URL corresponding to the given weather symbol.
    function imageUrl(symbolId = 0)
    {
        const baseUrl = "https://cdn.fmi.fi/symbol-images/smartsymbol/v3/p/";
        const imageId = (()=>
        {
            // Maps FMI's legacy image ids into their 2019 ones.
            switch (symbolId)
            {
                case 1:  return 1;  // selkeää
                case 2:  return 4;  // puolipilvistä
                case 21: return 21; // heikkoja sadekuuroja
                case 22: return 24; // sadekuuroja
                case 23: return 27; // voimakkaita sadekuuroja
                case 3:  return 7;  // pilvistä
                case 31: return 37; // heikkoa vesisadetta
                case 32: return 38; // vesisadetta
                case 33: return 39; // voimakasta vesisadetta
                case 41: return 51; // heikkoja lumikuuroja
                case 42: return 52; // lumikuuroja
                case 43: return 53; // voimakkaita lumikuuroja
                case 51: return 57; // heikkoa lumisadetta
                case 52: return 58; // lumisadetta
                case 53: return 59; // voimakasta lumisdetta
                case 61: return 71; // ukkoskuuroja
                case 62: return 74; // voimakkaita ukkoskuuroja
                case 63: return 77; // ukkosta
                case 64: return 77; // voimakasta ukkosta
                case 71: return 41; // heikkoja räntäkuuroja
                case 72: return 42; // räntäkuuroja
                case 73: return 43; // voimakkaita räntäkuuroja
                case 81: return 47; // heikkoa räntäsadetta
                case 82: return 48; // räntäsadetta
                case 83: return 49; // voimakasta räntäsaetta
                case 91: return 9;  // utua
                case 92: return 9;  // sumua
                default: return 9;
            }
        })();

        // The night (moon) versions of FMI's symbols are identified by appending "10" to
        // the symbol's image name; e.g. 9 -> 109, but note: 19 -> 119.
        const nightPrefix = (props.isNight? ("1".padEnd(3 - String(imageId).length, "0")) : "");
        
        return (baseUrl + nightPrefix + imageId + ".svg");
    }
}
