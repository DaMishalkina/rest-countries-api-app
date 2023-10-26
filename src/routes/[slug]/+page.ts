import {error} from '@sveltejs/kit';

import type {PageLoad} from "../../../.svelte-kit/types/src/routes/[slug]/$types";
import type {LocalDataCountry} from "../../lib/types";

export const load: PageLoad = async ({fetch, params}) => {
    let country = null;
    let borders = null;

    try {
        const fetchCountryData = async () => {
            const response = await fetch(
                `https://restcountries.com/v3.1/alpha/${params.slug}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders,cca3`
            )
            if(!response.ok){
                const fallbackResponse = await fetch(
                    "https://raw.githubusercontent.com/DaMishalkina/rest-countries-api-app/main/static/data/data.json"
                );
                if(!fallbackResponse.ok){
                    throw error(404, {
                        message: "Not found"
                    });
                }
                const countries = await fallbackResponse.json();
                country = countries.find((countryItem: LocalDataCountry) => {
                    return countryItem.alpha3Code.toLowerCase() === params.slug
                });
                borders =  country.borders;

                return {
                    country: country,
                    borders: borders
                }
            }
            country = await response.json();
            borders =  country[0].borders;

            return {
                country: country,
                borders: borders
            }
        }
        const fetchBorderData = async () => {
            try {
                const borders = await fetchCountryData().then(({ borders }) => borders);
                const borderPromises = borders.map(async (border: string) => {
                    const response = await fetch(`https://restcountries.com/v3.1/alpha/${border}?fields=name,cca3`);
                    if (!response.ok) {
                        const fallbackResponse = await fetch(
                            "https://raw.githubusercontent.com/DaMishalkina/rest-countries-api-app/main/static/data/data.json"
                        );
                        if(fallbackResponse.ok){
                            const allCountries = await fallbackResponse.json();
                            return allCountries.find((countryItem: LocalDataCountry) => {
                                return countryItem.alpha3Code === border
                            });
                        }
                        console.error(`Failed to fetch data for border: ${border}`);
                        return { name: 'Fallback Border Name' }
                    }
                    return response.json();
                });

                return await Promise.all(borderPromises);
            } catch (error) {
                // Handle any errors that may occur during the fetch
                console.error('Fetch Border Data Error:', error);
                // You can decide to return a fallback response or throw an error here
                // Example using a fallback response:
                return [];
            }
        };

        return {
            country: fetchCountryData().then(({country}) => country),
            borders: fetchBorderData()
        }
    } catch (error){
        console.error(error);
        return {error: "Unable to fetch country data"};
    }
}