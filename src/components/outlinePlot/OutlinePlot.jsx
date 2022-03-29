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

function createOutline(data, dataKey, plotXOffset, minValue, valueRange) {
    let lineString = "M 0,0 ";
    for (let i = 0; i < data.length; i++) {
        const currentValue = (data[i][dataKey] - minValue) / valueRange * 100 + plotXOffset;
        lineString += "H " + currentValue.toString() + " ";
        lineString += "v 1 ";
    }
    lineString += "L 0," + data.length.toString() + " z";

    return lineString;
}

function createDataLine(data, dataKey, plotXOffset, minValue, valueRange) {
    let lineString = "";
    for (let i = 0; i < data.length; i++) {
        const currentValue = (data[i][dataKey] - minValue) / valueRange * 100 + plotXOffset;
        if(i === 0) {
            lineString += "M " + currentValue.toString() + "," + i.toString() + " ";
        }
        lineString += "H " + currentValue.toString() + " ";
        lineString += "v 1 ";
    }

    return lineString;
}

function createCurrentHourBlock(data, dataKey, currentHour, plotXOffset, minValue, valueRange) {
    const yStartPosition = currentHour + 0.05;
    const xValueAtCurrentHour = (data[currentHour][dataKey] - minValue) / valueRange * 100 + plotXOffset;
    const blockHeight = 0.9;
    const pathForBlock = `M 0,${yStartPosition} H ${xValueAtCurrentHour} v ${blockHeight} H 0 z`;
    return pathForBlock;
}

export default function OutlinePlot({dayID,
                                        plotID,
                                        currentHour,
                                        weatherData,
                                        dataKey,
                                        requestedMinimumValue = undefined,
                                        requestedMinimalValueRange = undefined}) {
    const plotXOffset = 20;
    const plotDayID = plotID.toString() + dayID.toString();

    let [minValue, maxValue] = getMinMax(weatherData, dataKey);
    minValue = requestedMinimumValue === undefined ? minValue : Math.min(minValue, requestedMinimumValue);

    let valueRange = maxValue - minValue;
    valueRange = requestedMinimalValueRange === undefined ? valueRange : Math.max(valueRange, requestedMinimalValueRange);

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

        const minViewBoxWidth = 100 + plotXOffset;
        const viewbox = `${xMin} ${yMin} ${Math.max(
            xMax - xMin,
            minViewBoxWidth
        )} ${yMax - yMin}`;

        svg.setAttribute("viewBox", viewbox);
    }, [weatherData, plotDayID]);

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
                    d={createOutline(weatherData, dataKey, plotXOffset, minValue, valueRange)}
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
                    d={createDataLine(weatherData, dataKey, plotXOffset, minValue, valueRange)}
                />
            </defs>

            <path
                className="currentHourPath"
                strokeWidth="0"
                vectorEffect="non-scaling-stroke"
                d={createCurrentHourBlock(weatherData, dataKey, currentHour, plotXOffset, minValue, valueRange)}
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