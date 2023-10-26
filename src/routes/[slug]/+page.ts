import type {PageLoad} from "../../../.svelte-kit/types/src/routes/[slug]/$types";
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({fetch, params}) => {
    try {
        const fetchCountryData = async () => {
            const response = await fetch(
                `https://restcountries.com/v3.1/name/${params.slug.replace(/-/g, " ")}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`
            )
            if(!response.ok || !response){
                throw error(404, {
                    message: 'Not found'
                });
            }
            const country = await response.json();
            const borders =  country[0].borders;

            return {
                country: country[0],
                borders: borders
            }
        }
        const fetchBorderData = async () => {
            const borders = await fetchCountryData().then(({borders}) => borders);
            const res =  Promise.all(
                borders.map(async (border: string) => await (await fetch(`https://restcountries.com/v3.1/alpha/${border}?fields=name`)).json())
            )
            return await res

        }
        return {
            country: fetchCountryData().then(({country}) => country),
            borders: fetchBorderData()
        }
    } catch (error){
        console.error(error);
        return {error: "Unable to fetch country data"};
    }
}