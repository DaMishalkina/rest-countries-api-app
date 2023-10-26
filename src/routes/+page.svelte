<script lang="ts">
    import {base} from "$app/paths";
    import Card from "$lib/components/Card.svelte";
    import {divideNumberWithComa} from "$lib/utils/divideNumberWithComa";
    import Filter from "$lib/components/Filter.svelte";
    import {onMount} from "svelte";
    import {replaceSpaceWithDash} from "$lib/utils/replaceSpaceWithDash";
    import Search from "$lib/components/Search.svelte";
    import {searchQuery} from "../lib/stores/searchQuery";

    import type {MainCountry} from "../lib/types";
    export let data: {countries: MainCountry[]};
    let displayedCountries = data?.countries || [];
    let regions = Array.from(new Set(displayedCountries.map((country) => country.region))) || [];
    const handleSearch = () => {
        displayedCountries = data.countries.filter((country) =>
            country.name.common.toLowerCase().includes($searchQuery.searchTerm.toLowerCase()) &&
            country.region.includes($searchQuery.selectedFilter)
        )
    }
    onMount(() => {
       handleSearch();
    });

</script>

<main class="main">
    <section class="main__filters">
        <Search
                on:search={handleSearch}
        />
        <Filter title="region" options={regions} on:select={handleSearch} />
    </section>
    {#if displayedCountries?.length > 0}
        <section class="main__countries-list">
            {#each displayedCountries as country, i (i)}
                <Card
                        cardLink={base + `/${replaceSpaceWithDash(country?.cca3)}`}
                        cardTitle={country?.name?.common}
                        cardImage={country?.flags?.png}
                        cardInfos={[
                            `Population: ${divideNumberWithComa(country?.population)}`,
                            `Region: ${country?.region}`,
                            `Capital: ${country?.capital[0]}`
                             ]}
                />
            {/each}
        </section>
    {/if}
</main>



<style>
    :global(body) {
        font-family: "Nunito Sans", sans-serif;
        background: var(--bg);
        padding: 0;
        margin: 0;
    }
    :global(input), :global(button) {
        font-family: "Nunito Sans", sans-serif;
    }
    :global(button){
        cursor: pointer;
    }
    :global(p){
        margin: 0;
    }
    :global(ul), :global(li){
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .main {
        padding: 30px 20px 80px 20px;
        display: flex;
        flex-direction: column;
        gap: 40px
    }
    .main__filters {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    .main__countries-list {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    @media (min-width: 660px) {
        .main__countries-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 1200px) {
        .main {
            padding: 50px;
            gap: 50px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .main__filters {
            flex-direction: row;
            justify-content: space-between;
        }
        .main__countries-list {
            grid-template-columns: repeat(4, 1fr);
            gap: 70px;
        }
    }
</style>

