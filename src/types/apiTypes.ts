type InfoType = {
    value: number
    detail: string
}

export type TotalDataType = {
    confirmed: InfoType
    recovered: InfoType
    deaths: InfoType
    lastUpdate: string
}

export type DailyDataType = {
    totalConfirmed: number
    mainlandChina: number
    otherLocations: number
    deltaConfirmed: number
    totalRecovered: number
    confirmed:{
        total: number
        china: number
        outsideChina: number
    }
    deltaConfirmedDetail:{
        total: number
        china: number
        outsideChina: number
    }
    deaths:{
        total: number
        china: number
        outsideChina: number
    }
    recovered:{
        total: number
        china: number
        outsideChina: number
    }
    active: number
    deltaRecovered: number
    incidentRate: number
    peopleTested: number
    reportDate: string
}

export type CountriesType = {
    countries: CountryType[]
}

export type CountryType = {
    name: string,
    iso2: string,
    iso3: string
}


