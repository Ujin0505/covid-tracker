import React, {FC} from 'react'
import {Line, Bar} from 'react-chartjs-2';
import {DailyDataType} from "../../types/apiTypes";

type Prop = {
    data: DailyDataType[]
}

export const LineChart : FC<Prop> = ({data}) =>{
    return <div>
        <Line
            data={{
                labels: data.map((item) => item.reportDate),
                datasets: [{
                    data: data.map((item) => item.confirmed.total),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: data.map((item) => item.deaths.total),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                },
                ],
            }}
        />
    </div>
}
