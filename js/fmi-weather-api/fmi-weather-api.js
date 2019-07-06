/*
 * 2019 Tarpeeksi Hyvae Soft
 * Beginner weather app in React
 * 
 */

"use strict";

// Provides a very partial third-party access wrapper for the Finnish Meteorological
// Institute's open data weather API. You can find the API's documentation at
// https://en.ilmatieteenlaitos.fi/open-data-manual.
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
        // Returns a set of weather forecasts given the arguments. The forecasts will be
        // returned as an array of objects, one object per forecast. The forecast object
        // will contain values for the parameters specified by returnParameters; as well
        // as a timestamp specifying the point in time that the forecast is for.
        //
        // Will return at most the number of forecasts specified by numForecasts, but
        // may return fewer (including none, i.e. an empty array).
        get_forecast: async(args = {})=>
        {
            args =
            {
                ...{
                    place: "Helsinki",
                    returnParameters: ["temperature", "weatherSymbol3"],
                    timeStepHr: 3,
                    numForecasts: 5,
                },
                ...args,
            }

            // We'll limit the query to the timespan requested of us. Note that this assumes
            // that the forecast will always be fetched starting from the current moment; in
            // the future, I might add support for more arbitrary timespans.
            const startDate = new Date();
            const endDate = new Date(startDate);
            endDate.setHours(endDate.getHours() + (args.timeStepHr * args.numForecasts));

            // Make the query to the API.
            const rawData = await fetch(api.baseUrl +
                                        `&request=getFeature` +
                                        `&storedquery_id=${api.queryId.forecast}` +
                                        `&place=${args.place}` +
                                        `&starttime=${startDate.toISOString()}` +
                                        `&endtime=${endDate.toISOString()}` +
                                        `&parameters=${args.returnParameters.join(",")}` +
                                        `&timestep=${args.timeStepHr*60}`)
                                        .then(response=>response.text());
            //const rawData = await fetch("./misc/weather-data.xml").then(response=>response.text());/// For developing, to cut down on traffic to the data API

            const dataPoints = (()=>
            {
                const xml = new DOMParser().parseFromString(rawData,"text/xml");
                const data = xml.getElementsByTagName("gml:doubleOrNilReasonTupleList");

                if (!data.length)
                {
                    return [];
                }

                return data[0].firstChild.nodeValue.split(" ").filter(e=>e.trim()!="");
            })();

            const startTime = new Date((()=>
            {
                const xml = new DOMParser().parseFromString(rawData,"text/xml");
                const startTime = xml.getElementsByTagName("gml:beginPosition");

                if (!startTime.length)
                {
                    // Return an approximation of what the initial timestamp for the data might be.
                    return Date.now();
                }

                return startTime[0].firstChild.nodeValue;
            })());

            /// NOTE: We don't do any further error-checking to make sure the API response was valid
            //        etc. Normally you might do so, but it's not necessary for the purposes of this
            //        app.

            // For each weather entry, the values array should contain one value per parameter.
            if ((dataPoints.length % args.returnParameters.length) != 0)
            {
                return [];
            }

            // Expand the flat array of values into an array of key/value pairs.
            const weatherEntries = [];
            for (let i = 0; i < Math.min(args.numForecasts, dataPoints.length/args.returnParameters.length); i++)
            {
                weatherEntries.push(args.returnParameters.reduce((newWeatherEntry, param, idx)=>
                {
                    return {
                        ...newWeatherEntry,
                        [param]: Number(dataPoints[i*args.returnParameters.length+idx]),
                    };
                }, {timestamp:new Date(startTime).setHours(startTime.getHours() + args.timeStepHr*i)}));
            }

            return weatherEntries;
        },
    };

    return publicInterface;
}
