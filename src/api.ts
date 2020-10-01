import axios from 'axios';
import {CountriesType, DailyDataType, TotalDataType} from "./types/apiTypes";

const url = "https://covid19.mathdro.id/api";

type  ApiType = {
      getWorldTotalInfo (): Promise<TotalDataType>
      getDailyData() : Promise<DailyDataType[]>
      getCountryTotalInfo (country: string): Promise<TotalDataType>
      getCountries(): Promise<CountriesType>
}

export const api: ApiType ={
      getWorldTotalInfo: async (): Promise<TotalDataType> =>{
            const data = await axios.get<TotalDataType>(`${url}`);
            return data.data;
      },

      getDailyData: async(): Promise<DailyDataType[]> => {
            const data = await  axios.get<DailyDataType[]>(`${url}/daily`);
            return data.data;
      },

      getCountries : async (): Promise<CountriesType> => {
            const data = await axios.get<CountriesType>(`${url}/countries/`);
            return data.data;
      },

      getCountryTotalInfo: async(country: string): Promise<TotalDataType> =>{
            const data = await axios.get<TotalDataType>(`${url}/countries/${country}`);
            return data.data;
      }

};







