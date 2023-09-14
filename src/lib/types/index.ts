export interface BorderCountry {
    name: {
        official: string,
        common: string,
        [index: string]: unknown
    }
}

type Currency = {
    [index: string]: {
        name: string,
        symbol: string
    }
}

export interface MainCountry extends BorderCountry {
    capital: string[],
    region: string,
    population: number,
    flags: {
        png: string,
        svg: string,
        alt: string
    }
    subregion?: string,
    tld?: string[],
    currencies?: Currency,
    languages?: {
        [index: string]: string
    }
    borders?: string[],
}

export interface Countries {
    countries: MainCountry[]
}