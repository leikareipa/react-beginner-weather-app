"use strict";

// Parses an FMI open data XML response. Returns an array of objects, each of which describes
// a particular observation of the weather with discrete parameters (temperature, humidity, etc.).
export async function load_weather_data(args = {})
{
    const apiUrl    = "http://opendata.fmi.fi/wfs?service=WFS&request=getFeature";
    const apiQuery  = "&storedquery_id=fmi::forecast::hirlam::surface::point::multipointcoverage";
    const apiPlace  = `&place=${args.place}`;
    const apiParams = `&parameters=${args.parameters.join(",")}`;

    // Fetch the data and convert it into an array of values, where for each weather observation
    // there is one value per corresponding parameter. The values will be arranged in the order
    // in which the parameters were given.
    const rawData = await fetch(apiUrl + apiQuery + apiPlace + apiParams).then(response=>response.text());
    const xml = new DOMParser().parseFromString(rawData,"text/xml");
    const values = xml.getElementsByTagName("gml:doubleOrNilReasonTupleList")[0].firstChild.nodeValue.split(" ").filter(e=>e.trim()!="");

    // For each weather entry, the values array should contain one value per parameter.
    if ((values.length % args.parameters.length) != 0)
    {
        return {};
    }

    /// NOTE: We don't do any further error-checking to make sure the API response was valid
    //        etc. Normally you might do so, but it's not necessary for the purposes of this
    //        app.

    // Expand the flat array of values into an array of key/value pairs, for convenience.
    const weatherEntries = [];
    for (let i = 0; i < values.length/args.parameters.length; i++)
    {
        weatherEntries.push(args.parameters.reduce((newWeatherEntry, param, idx)=>
        {
            return {...newWeatherEntry, [param]:Number(values[i*args.parameters.length+idx])}
        }, {}));
    }

    return weatherEntries;
}
