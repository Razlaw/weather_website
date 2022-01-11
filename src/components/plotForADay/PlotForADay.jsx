import "./plotForADay.scss";
import React from 'react';
import {
    ComposedChart,
    Cell,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    BarChart,
    Legend,
    ResponsiveContainer,
} from 'recharts';

// const data = [
//     {
//         name: 'Page A',
//         uv: 590,
//         pv: 800,
//         amt: 1400,
//     },
//     {
//         name: 'Page B',
//         uv: 868,
//         pv: 967,
//         amt: 1506,
//     },
//     {
//         name: 'Page C',
//         uv: 1397,
//         pv: 1098,
//         amt: 989,
//     },
//     {
//         name: 'Page D',
//         uv: 1480,
//         pv: 1200,
//         amt: 1228,
//     },
//     {
//         name: 'Page E',
//         uv: 1520,
//         pv: 1108,
//         amt: 1100,
//     },
//     {
//         name: 'Page F',
//         uv: 1400,
//         pv: 680,
//         amt: 1700,
//     },
// ];

export default function PlotForADay({currentHour, weatherData}) {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" width="100%" height="100%" data={weatherData} margin={{
                top: 20,
                left: 20
            }}>
                <XAxis type="number" hide={true}/>
                <Bar dataKey="temp" barSize={20} label={{ position: 'right' }}>
                    {weatherData.map((entry, index) => (
                        <Cell
                            className={index === currentHour ? "barCell active" : "barCell"}
                            fill={index === currentHour ? '#82ca9d' : '#8884d8'}
                            key={`cell-${index}`}/>
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}
