import type {PageLoad} from "../../.svelte-kit/types/src/routes/$types";

export const load: PageLoad = async ({fetch}) => {
    try {
        const response = await fetch(
            "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,cca3"
        )
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`)
        }
        const countries = await response.json();
        return {countries}
    } catch (error){
        console.error(error);
        return {error: "Unable to fetch countries"};
    }
}