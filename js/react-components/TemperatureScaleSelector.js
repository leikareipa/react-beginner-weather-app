"use strict";

export function TemperatureScaleSelector(props = {/*temperatureDisplayScale, selectionCallback, style*/})
{
    return React.createElement("span", {style:props.style, className:"TemperatureScaleSelector"},
                                React.createElement("span", {}, ""),
                                React.createElement("span",
                                {
                                    style:
                                    {
                                        cursor: (props.temperatureDisplayScale !== "celsius"? "pointer" : "default"), 
                                        color: (props.temperatureDisplayScale !== "celsius"? "rgba(0, 0, 0, 0.2)" : "inherit"),
                                    },
                                    onClick: ()=>props.selectionCallback("celsius"),
                                }, "°C"),
                                React.createElement("span",
                                {
                                    style:
                                    {
                                        paddingLeft:"5px",
                                        cursor: (props.temperatureDisplayScale !== "fahrenheit"? "pointer" : "default"),
                                        color: (props.temperatureDisplayScale !== "fahrenheit"? "rgba(0, 0, 0, 0.2)" : "inherit"), 
                                    },
                                    onClick: ()=>props.selectionCallback("fahrenheit"),
                                }, "°F"),
                                React.createElement("span",
                                {
                                    style:
                                    {
                                        paddingLeft:"5px",
                                        cursor: (props.temperatureDisplayScale !== "kelvin"? "pointer" : "default"),
                                        color: (props.temperatureDisplayScale !== "kelvin"? "rgba(0, 0, 0, 0.2)" : "inherit"), 
                                    },
                                    onClick: ()=>props.selectionCallback("kelvin"),
                                }, "°K"));
}
