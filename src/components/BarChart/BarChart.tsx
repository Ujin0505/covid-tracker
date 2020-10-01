import React, {FC} from "react";
import { Bar } from "react-chartjs-2";


type Props = {
    name: string
    confirmed: number,
    recovered: number,
    deaths: number
}


export const BarChart: FC<Props> = ({name,confirmed, deaths, recovered}) =>{
    return <div>
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [confirmed, recovered, deaths],
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${name}` },
            }}
        />
    </div>

}
