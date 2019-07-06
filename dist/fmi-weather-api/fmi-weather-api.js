"use strict";export function fmi_weather_api(){const a={baseUrl:"http://opendata.fmi.fi/wfs?service=WFS",queryId:{forecast:"fmi::forecast::hirlam::surface::point::multipointcoverage"}};return{get_forecast:async(b={})=>{b={...{place:"Helsinki",returnParameters:["temperature","weatherSymbol3"],timeStepHr:3,numForecasts:5},...b};const c=new Date,d=new Date(c);d.setHours(d.getHours()+b.timeStepHr*b.numForecasts);const e=await fetch(a.baseUrl+`&request=getFeature`+`&storedquery_id=${a.queryId.forecast}`+`&place=${b.place}`+`&starttime=${c.toISOString()}`+`&endtime=${d.toISOString()}`+`&parameters=${b.returnParameters.join(",")}`+`&timestep=${60*b.timeStepHr}`).then(a=>a.text()),f=(()=>{const a=new DOMParser().parseFromString(e,"text/xml"),b=a.getElementsByTagName("gml:doubleOrNilReasonTupleList");return b.length?b[0].firstChild.nodeValue.split(" ").filter(a=>""!=a.trim()):[]})(),g=new Date((()=>{const a=new DOMParser().parseFromString(e,"text/xml"),b=a.getElementsByTagName("gml:beginPosition");return b.length?b[0].firstChild.nodeValue:Date.now()})());if(0!=f.length%b.returnParameters.length)return[];const h=[];for(let a=0;a<Math.min(b.numForecasts,f.length/b.returnParameters.length);a++)h.push(b.returnParameters.reduce((c,d,e)=>({...c,[d]:+f[a*b.returnParameters.length+e]}),{timestamp:new Date(g).setHours(g.getHours()+b.timeStepHr*a)}));return h}}}