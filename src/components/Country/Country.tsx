import React, {FC, useState, useEffect} from "react";
import {api} from "../../api";
import {FormControl, Grid, NativeSelect, Typography} from "@material-ui/core";
import  styles from './Country.module.css';
import {TotalDataType} from "../../types/apiTypes";
import {BarChart} from "../BarChart/BarChart";

export const Country: FC = () => {
    const [countryNames, setCountryNames] = useState<string[]>();
    const [selectedCountryName, setSelectedCountryName] = useState<string>('');
    const [country, setCountry] = useState<TotalDataType>();

    useEffect(() =>{
        const fetchCountryNames = async () => {
            const data = await api.getCountries();
            const names = data.countries.map(item => item.name);
            setCountryNames(names);
        };
        fetchCountryNames().then(()=>{
            if(countryNames){
                setSelectedCountryName(countryNames[0])
            }
        })

    }, [countryNames]); // == componentDidMount

    useEffect(() =>{
        const fetchedCountry = async() => {
            if(selectedCountryName){
                const data = await api.getCountryTotalInfo(selectedCountryName);
                setCountry(data);
            }
        }

        fetchedCountry();
    }, [selectedCountryName])


    const chooseCountry = async (countryName: string) => {
        setSelectedCountryName(countryName)
    }

    const pickerJxs =  countryNames && <Grid container justify="center">
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e)=> chooseCountry(e.target.value)}>
                    {countryNames.map((c, i)=> <option key={i} value={c}>{c}</option>)}
                </NativeSelect>
            </FormControl>
        </Grid>


    const barChartJsx = country &&
            <BarChart name={selectedCountryName} confirmed={country.confirmed.value} recovered={country.recovered.value} deaths={country.deaths.value}/>


    return <div>
            {pickerJxs}
            {barChartJsx}
        </div>
}