import {error} from '@sveltejs/kit';

import type {PageLoad} from "../../../.svelte-kit/types/src/routes/[slug]/$types";
import type {LocalDataCountry} from "../../lib/types";

export const load: PageLoad = async ({fetch, params}) => {
    let country = null;
    let borders = null;

    try {
        const fetchCountryData = async () => {
            const response = await fetch(
                "https://raw.githubusercontent.com/DaMishalkina/rest-countries-api-app/main/static/data/data.json"
            )
            if(!response.ok){
                const fallbackResponse = await fetch(
                    `https://restcountries.com/v3.1/alpha/${params.slug}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders,cca3`
                );
                if(!fallbackResponse.ok){
                    throw error(404, {
                        message: "Not found"
                    });
                }
                country = await fallbackResponse.json();
                borders =  country.borders;

                return {
                    country: country,
                    borders: borders
                }
            }
            // if(!response.ok){
            //         throw error(404, {
            //             message: "Not found"
            //         });
            // }

            const countries = await response.json();
            country = countries.find((countryItem: LocalDataCountry) => {
                return countryItem.alpha3Code.toLowerCase() === params.slug
            });
            borders =  country.borders;

            return {
                country: country,
                ...(borders && {"borders": borders})
            }
        }
        const fetchBorderData = async () => {
            try {
                const borders = await fetchCountryData().then(({ borders }) => borders);
                const borderPromises = borders?.map(async (border: string) => {
                    const response = await fetch("https://raw.githubusercontent.com/DaMishalkina/rest-countries-api-app/main/static/data/data.json");
                    if (!response.ok) {
                        const fallbackResponse = await fetch(
                            `https://restcountries.com/v3.1/alpha/${border}?fields=name,cca3`
                        );
                        if(fallbackResponse.ok){
                            return fallbackResponse.json();
                        }
                        console.error(`Failed to fetch data for border: ${border}`);
                        return { name: 'Fallback Border Name' }
                    }
                    // if (!response.ok) {
                    //     console.error(`Failed to fetch data for border: ${border}`);
                    //     return { name: 'Fallback Border Name' }
                    // }
                    const allCountries = await response.json();
                    return allCountries.find((countryItem: LocalDataCountry) => {
                        return countryItem.alpha3Code === border
                    });
                });

                return await Promise.all(borderPromises);
            } catch (error) {
                console.error('Fetch Border Data Error:', error);
                return [];
            }
        };

        return {
            country: fetchCountryData().then(({country}) => country),
            ...(await fetchCountryData().then(({ borders }) => borders) && {"borders": fetchBorderData()})
            // borders: fetchBorderData()
        }
    } catch (error){
        console.error(error);
        return {error: "Unable to fetch country data"};
    }
}