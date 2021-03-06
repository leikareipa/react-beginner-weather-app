/*
 * 2019 Tarpeeksi Hyvae Soft
 * Beginner weather app in React
 * 
 */

"use strict";

import {WeatherCardDisplay} from "./WeatherCardDisplay.js";
import {TemperatureScaleSelector} from "./TemperatureScaleSelector.js";

// Displays the given weather data for the given place (e.g. city).
export function WeatherApp(props = {/*place = "", weatherData = [{}]*/})
{
    const [temperatureDisplayScale, setTemperatureDisplayScale] = React.useState("celsius");

    if (typeof props.place !== "string" ||
        !Array.isArray(props.weatherData) ||
        !props.weatherData.length)
    {
        return <div style={{fontStyle: "italic"}}>No weather information for "{props.place}".</div>
    }
    else
    {
        return <>
                   <div className="Header">
                       <div className="Title">{props.title}</div>
                       <TemperatureScaleSelector temperatureDisplayScale={temperatureDisplayScale}
                                                 selectCallback={setTemperatureDisplayScale}
                                                 scales={[
                                                    {scaleName: "celsius", scaleSymbol: "C"},
                                                    {scaleName: "fahrenheit", scaleSymbol: "F"},
                                                    {scaleName: "kelvin", scaleSymbol: "K"},
                                                 ]}>
                       </TemperatureScaleSelector>
                    </div>
                    <WeatherCardDisplay temperatureDisplayScale={temperatureDisplayScale}
                                        weatherData={props.weatherData}>
                    </WeatherCardDisplay>
               </>
    }
}
