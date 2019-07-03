"use strict";

// Provides a very partial access wrapper for the Finnish Meteorological Institute's open
// data weather API.
export function fmi_weather_api()
{
    const api =
    {
        baseUrl: "http://opendata.fmi.fi/wfs?service=WFS",
        queryId:
        {
            forecast: "fmi::forecast::hirlam::surface::point::multipointcoverage",
        }
    }

    const publicInterface =
    {
        // Returns a weather forecast given the arguments. It seems that the forecast data
        // extends up to three days away.
        get_forecast: async(args = {})=>
        {
            args =
            {
                ...{
                    place: "helsinki",
                    returnParameters: ["temperature", "weathersymbol3"],
                    forecastIntervalHr: 3,
                    numForecasts: 5,
                },
                ...args,
            }

            /// TODO: Add the "starttime" and "endtime" query parameters.
            const rawData = await fetch(api.baseUrl +
                                        `&request=getFeature` +
                                        `&storedquery_id=${api.queryId.forecast}` +
                                        `&place=${args.place}` +
                                        `&parameters=${args.returnParameters.join(",")}` +
                                        `&timestep=${args.forecastIntervalHr*60}`)
                                        .then(response=>response.text());

            const values = new DOMParser().parseFromString(rawData,"text/xml")
                                          .getElementsByTagName("gml:doubleOrNilReasonTupleList")[0].firstChild
                                                                                                    .nodeValue
                                                                                                    .split(" ")
                                                                                                    .filter(e=>e.trim()!="");

            /// TODO: Read the forecasts' timestamps from the XML, and add that info into the
            /// weather entries object that this function returns.

            // For each weather entry, the values array should contain one value per parameter.
            if ((values.length % args.returnParameters.length) != 0)
            {
                return {};
            }

            /// NOTE: We don't do any further error-checking to make sure the API response was valid
            //        etc. Normally you might do so, but it's not necessary for the purposes of this
            //        app.

            // Expand the flat array of values into an array of key/value pairs, for convenience.
            const weatherEntries = [];
            for (let i = 0; i < values.length/args.returnParameters.length; i++)
            {
                weatherEntries.push(args.returnParameters.reduce((newWeatherEntry, param, idx)=>
                {
                    return {...newWeatherEntry, [param]:Number(values[i*args.returnParameters.length+idx])}
                }, {}));
            }

            /// TODO: Might pad the array if it doesn't have enough elements.
            weatherEntries.length = Math.min(args.numForecasts, weatherEntries.length);

            return weatherEntries;
        },
    };

    return publicInterface;
}
