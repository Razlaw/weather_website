import "./plotForADay.scss";
import React from 'react';
import {
    Cell,
    Bar,
    XAxis,
    BarChart,
    ResponsiveContainer,
    LabelList
} from 'recharts';

export default function PlotForADay({currentHour, weatherData, dataKey, plotKey, unit, decimalPrecision = 0}) {

    const renderLabel = function(entry) {
        return (entry).toFixed(decimalPrecision) + unit;
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" width="100%" height="100%" data={weatherData} margin={{
                top: 20,
                left: 20,
                right: 20,
                bottom: 0
            }}>
                <XAxis
                    type="number"
                    hide={true}
                    domain={[0, "dataMax + 1"]}
                />
                {/*<CartesianGrid*/}
                {/*    strokeDasharray="19 6"*/}
                {/*    strokeDashoffset={10}*/}
                {/*    stroke={'#000'}*/}
                {/*    width={20}*/}
                {/*/>*/}
                <Bar
                    dataKey={dataKey}
                    barSize={18}
                    background={{ fill: 'rgb(255,255,255)' }}
                    isAnimationActive={false}
                >
                    <LabelList
                        dataKey={plotKey}
                        position="right"
                        formatter={renderLabel}
                    />
                    {weatherData.map((entry, index) => (
                        <Cell
                            className={index === currentHour ? "barCell active" : "barCell"}
                            fill={index === currentHour ? '#82ca9d' : 'rgb(136,132,216)'}
                            height={18}
                            stroke={'#000'}
                            strokeWidth={0}
                            radius={[0, 5, 5 ,0]}
                            key={`cell-${index}`}
                        />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}
