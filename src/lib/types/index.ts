export type BorderCountry = {
    name: {
        official: string,
        common: string,
        nativeName: {
            [index: string]: {
                [index: string]: string
            }
        }
    },
    cca3: string
}

type Currency = {
    [index: string]: {
        name: string,
        symbol: string
    }
}

export type MainCountry = BorderCountry & {
    capital: string[],
    region: string,
    population: number,
    flags: {
        png: string,
        svg: string,
        alt: string
    }
    subregion: string,
    tld: string[],
    currencies: Currency,
    languages: {
        [index: string]: string
    }
    borders: string[],
}

export interface Countries {
    countries: MainCountry[]
}

export type LocalDataCountry = {
    name: string,
    nativeName: string,
    alpha3Code: string,
    capital: string,
    region: string,
    population: number,
    flags: {
        png: string,
        svg: string
    },
    subregion: string,
    topLevelDomain: string[],
    currencies: Currency,
    languages: LanguageLocalDataCountry[]
    borders: string[],
    altSpellings?: string[],
    cioc: string
}

type LanguageLocalDataCountry = {
    name: string,
    nativeName: string,
    [index: string]: string
}