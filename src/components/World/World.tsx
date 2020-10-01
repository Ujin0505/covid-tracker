import React, {FC, useEffect, useState} from 'react';
import {CardContent, Typography, Grid} from "@material-ui/core";
import  styles from './World.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import {CardInfo} from "../CardInfo/CardInfo";
import {DailyDataType, TotalDataType} from "../../types/apiTypes";
import {api} from "../../api";
import {LineChart} from "../LineChart/LineChart";


export const World: FC = () => {

    const [totalData, setTotalData] = useState<TotalDataType>();
    const [dailyData, setDailyData] = useState<DailyDataType[]>();

    useEffect(()=>{
        const fetchDailyData = async() =>{
            const data = await api.getDailyData()
            data.map(item =>  item.confirmed.total)
            setDailyData(data);
        }
        const fetchTotalInfo  = async () =>{
            const data = await api.getWorldTotalInfo();
            setTotalData(data);
        }
        fetchDailyData();
        fetchTotalInfo();
    }, []);

    const cardsJsx = (
        totalData && <Grid container justify="center">
            <Typography variant="h2">Covid Tracker</Typography>
            <Grid container spacing={3} justify="center">
                <CardInfo className={cx(styles.card, styles.infected)} title="Infected" counterValue={totalData.confirmed.value}/>
                <CardInfo className={cx(styles.card, styles.recovered)} title="Recovered" counterValue={totalData.recovered.value}/>
                <CardInfo className={cx(styles.card, styles.deaths)} title="Deaths" counterValue={totalData.deaths.value}/>
            </Grid>
        </Grid>
    )

    const chartJsx = (
        dailyData &&
            <LineChart data={dailyData}></LineChart>
    )

    return <div>
            <div className={styles.container}>
                {cardsJsx}
                {chartJsx}
            </div>
        </div>
}
