import "./outlinePlot.scss";
import React, {useEffect} from 'react';

function getMinMax(data, dataKey) {
    let minValue = Number.MAX_VALUE;
    let maxValue = -Number.MAX_VALUE;
    for (let i = 0; i < data.length; i++) {
        minValue = Math.min(minValue, data[i][dataKey]);
        maxValue = Math.max(maxValue, data[i][dataKey]);
    }
    return [minValue, maxValue];
}

function createOutline(data, dataKey, minValue) {
    let lineString = "M 0,0 ";
    for (let i = 0; i < data.length; i++) {
        const currentValue = data[i][dataKey] - minValue;
        lineString += "H " + currentValue.toString() + " ";
        lineString += "v 1 ";
    }
    lineString += "L 0," + data.length.toString() + " z";

    return lineString;
}

function createDataLine(data, dataKey, minValue) {
    let lineString = "";
    for (let i = 0; i < data.length; i++) {
        const currentValue = data[i][dataKey] - minValue;
        if(i === 0) {
            lineString += "M " + currentValue.toString() + "," + i.toString() + " ";
        }
        lineString += "H " + currentValue.toString() + " ";
        lineString += "v 1 ";
    }

    return lineString;
}

export default function PlotForADay({dayID, plotID, currentHour, weatherData, dataKey}) {
    const plotDayID = plotID.toString() + dayID.toString();

    let [minValue, maxValue] = getMinMax(weatherData, dataKey);

    const minPlotWidth = 1;
    minValue -= Math.max(minPlotWidth, (maxValue - minValue) * 0.2);

    const minViewBoxWidth = 5;
    useEffect(() => {
        const svg = document.querySelector("." + plotDayID);

        const { xMin, xMax, yMin, yMax } = [...svg.children].reduce((acc, el) => {
            const { x, y, width, height } = el.getBBox();
            if (x < acc.xMin) acc.xMin = x;
            if (x + width > acc.xMax) acc.xMax = x + width;
            if (y < acc.yMin) acc.yMin = y;
            if (y + height > acc.yMax) acc.yMax = y + height;
            return acc;
        }, {"xMin": Number.MAX_VALUE,
            "xMax": -Number.MAX_VALUE,
            "yMin": Number.MAX_VALUE,
            "yMax": -Number.MAX_VALUE});

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
                <path
                    className={"outlinePath " + plotID.toString()}
                    id={"outlinePath" + plotDayID}
                    fill="none"
                    strokeWidth="4"
                    vectorEffect="non-scaling-stroke"
                    d={createOutline(weatherData, dataKey, minValue)}
                />

                <clipPath id={"clip" + plotDayID}>
                    <use href={"#outlinePath" + plotDayID} />
                </clipPath>

                <path
                    className={"dataPath " + plotID.toString()}
                    id={"dataPath" + plotDayID}
                    strokeWidth="4"
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                    d={createDataLine(weatherData, dataKey, minValue)}
                />
            </defs>

            <path
                className="currentHourPath"
                strokeWidth="0"
                vectorEffect="non-scaling-stroke"
                d={"M 0," + (currentHour + 0.05).toString() + " H " + (weatherData[currentHour][dataKey] - minValue).toString()+ " v 0.9 H 0 z"}
            />
            <use
                className={"outlinePath " + plotID.toString()}
                href={"#outlinePath" + plotDayID}
                clipPath={"url(#clip" + plotDayID + ")"}
            />
            <use
                className={"dataPath " + plotID.toString()}
                href={"#dataPath" + plotDayID}
                clipPath={"url(#clip" + plotDayID + ")"}
            />
        </svg>
    );
}