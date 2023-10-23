<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import Filter from "$lib/components/Filter.svelte";
    import Search from "$lib/components/Search.svelte";
    import type {MainCountry} from "$lib/types";
    import {searchQuery} from "../lib/stores/searchQuery";
    import {divideNumberWithComa} from "$lib/utils/divideNumberWithComa";
    import {replaceSpaceWithDash} from "$lib/utils/replaceSpaceWithDash";
    import {onMount} from "svelte";
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
                        cardLink="/{replaceSpaceWithDash(country?.name?.official)}"
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
</style>

