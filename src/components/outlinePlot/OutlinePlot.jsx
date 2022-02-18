import "./outlinePlot.scss";
import React, {useEffect} from 'react';

function createLine(data, dataKey) {
    let lineString = "M 0,0 ";
    let minValue = Number.MAX_VALUE;
    let maxValue = -Number.MAX_VALUE;
    for (let i = 0; i < data.length; i++) {
        minValue = Math.min(minValue, data[i][dataKey]);
        maxValue = Math.max(maxValue, data[i][dataKey]);
    }

    const minPlotWidth = 1;
    minValue -= Math.max(minPlotWidth, (maxValue - minValue) * 0.2);

    for (let i = 0; i < data.length; i++) {
        const currentValue = data[i][dataKey] - minValue;
        lineString += "H " + currentValue.toString() + " ";
        lineString += "v 1 ";
    }

    lineString += "L 0," + data.length.toString() + " z";

    return lineString;
}

export default function PlotForADay({dayID, plotID, currentHour, weatherData, dataKey}) {
    const plotDayID = plotID.toString() + dayID.toString();

    const minViewBoxWidth = 5;
    useEffect(() => {
        const svg = document.querySelector("." + plotDayID);

        const { xMin, xMax, yMin, yMax } = [...svg.children].reduce((acc, el) => {
            const { x, y, width, height } = el.getBBox();
            if (!acc.xMin || x < acc.xMin) acc.xMin = x;
            if (!acc.xMax || x + width > acc.xMax) acc.xMax = x + width;
            if (!acc.yMin || y < acc.yMin) acc.yMin = y;
            if (!acc.yMax || y + height > acc.yMax) acc.yMax = y + height;
            return acc;
        }, {});

        const viewbox = `${xMin} ${yMin} ${Math.max(
            xMax - xMin,
            minViewBoxWidth
        )} ${yMax - yMin}`;

        svg.setAttribute("viewBox", viewbox);
    }, [weatherData]);

    return (
        <svg
            className={"svgPlot " + plotDayID}
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="inset-shadow">
                    <feOffset dx="0.1" dy="0.1" />
                    <feGaussianBlur stdDeviation="0.4" result="offset-blur" />
                    <feComposite
                        operator="out"
                        in="SourceGraphic"
                        in2="offset-blur"
                        result="inverse"
                    />
                    <feFlood floodColor="black" floodOpacity=".95" result="color" />
                    <feComposite
                        operator="in"
                        in="color"
                        in2="inverse"
                        result="shadow"
                    />
                    <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                </filter>

                <path
                    id={plotDayID}
                    fill="none"
                    strokeWidth="4"
                    vectorEffect="non-scaling-stroke"
                    d={createLine(weatherData, dataKey)}
                />
                <clipPath id={"clip" + plotDayID}>
                    <use href={"#" + plotDayID} />
                </clipPath>
            </defs>

            <path
                className="shadowPath"
                strokeWidth="0"
                vectorEffect="non-scaling-stroke"
                d={createLine(weatherData, dataKey)}
                filter="url(#inset-shadow)"
            />
            {/*<path*/}
            {/*    className="currentHourPath"*/}
            {/*    fill="#ffffff"*/}
            {/*    strokeWidth="0"*/}
            {/*    vectorEffect="non-scaling-stroke"*/}
            {/*    d={"M 0," + currentHour.toString() + " H 10 v 1 H 0 z"}*/}
            {/*/>*/}
            <use href={"#" + plotDayID} clipPath={"url(#clip" + plotDayID + ")"}/>
        </svg>
    );
}