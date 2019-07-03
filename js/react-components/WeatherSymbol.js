"use strict";

// Displays a graphic indicating a weather condition - like sunny, cloudy, rainy, etc.
// Takes as input a WeatherSymbol3 value as returned by FMI's open data weather API for
// the fmi::forecast::hirlam::surface::point::multipointcoverage query.
export function WeatherSymbol({weatherSymbolId})
{
    return React.createElement("img", {src:imageUrl(weatherSymbolId)});

    // Returns a URL corresponding to the given weather image id.
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

        /// TODO: Adjust the image id for potential night mode (e.g. 101 is the night [moon] version of 1 [sun]).
        
        return (baseUrl + imageId + ".svg");
    }
}
