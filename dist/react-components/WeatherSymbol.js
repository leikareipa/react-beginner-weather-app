"use strict";export function WeatherSymbol(a={}){return React.createElement("img",{className:"WeatherSymbol",title:function(a=0){return 1===a?"Clear":2===a?"Partly cloudy":21===a?"Light rain showers":22===a?"Rain showers":23===a?"Heavy rain showers":3===a?"Cloudy":31===a?"Light rain":32===a?"Rain":33===a?"Heavy rain":41===a?"Light snow showers":42===a?"Snow showers":43===a?"Heavy snow showers":51===a?"Light snowfall":52===a?"Snowfall":53===a?"Heavy snowfall":61===a?"Thundershowers":62===a?"Strong thundershowers":63===a?"Thunder":64===a?"Heavy thunder":71===a?"Light sleet showers":72===a?"Sleet showers":73===a?"Heavy sleet showers":81===a?"Light sleet":82===a?"Sleet":83===a?"Heavy sleet":91===a?"Haze":92===a?"Fog":""}(a.weatherSymbolId),src:function(b=0){const c=(()=>1===b?1:2===b?4:21===b?21:22===b?24:23===b?27:3===b?7:31===b?37:32===b?38:33===b?39:41===b?51:42===b?52:43===b?53:51===b?57:52===b?58:53===b?59:61===b?71:62===b?74:63===b?77:64===b?77:71===b?41:72===b?42:73===b?43:81===b?47:82===b?48:83===b?49:91===b?9:92===b?9:9)(),d=a.isNight?"1".padEnd(3-(c+"").length,"0"):"";return"https://cdn.fmi.fi/symbol-images/smartsymbol/v3/p/"+d+c+".svg"}(a.weatherSymbolId)})}