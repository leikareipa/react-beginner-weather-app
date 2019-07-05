"use strict";import{TemperatureString}from"./TemperatureString.js";import{WeatherSymbol}from"./WeatherSymbol.js";export function WeatherCard(a={}){const b=new Date(a.timestamp).getHours()+"",c=new Date(a.timestamp).getMinutes()+"";return React.createElement("div",{className:"WeatherCard"},React.createElement(WeatherSymbol,{weatherSymbolId:a.weatherSymbolId,isNight:20<b||6>b}," /// TODO: Adjust for current length of day."),React.createElement(TemperatureString,{temperatureC:a.temperatureC,temperatureDisplayScale:a.temperatureDisplayScale,showTemperatureScaleSymbol:!1}),React.createElement("div",{className:"Timestamp"},b.padStart(2,"0"),":",c.padStart(2,"0")))}