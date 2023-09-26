<script lang="ts">
    import Filter from "$lib/components/Filter.svelte";
    import Search from "$lib/components/Search.svelte";
    import type {MainCountry} from "$lib/types";
    import {searchQuery} from "../lib/stores/searchQuery";
    export let data: {countries: MainCountry[]};
    let displayedCountries = data.countries || [];
    let regions = Array.from(new Set(displayedCountries.map((country) => country.region))) || [];
    const handleSearch = () => {
        displayedCountries = data.countries.filter((country) =>
            country.name.common.toLowerCase().includes($searchQuery.searchTerm.toLowerCase()) &&
            country.region.includes($searchQuery.selectedFilter)
        )
    }

</script>

<main class="main">
    <Search
            on:search={handleSearch}
    />
    <Filter title="region" options={regions} on:select={handleSearch} />
    {#each displayedCountries as country, i (i)}
        <a href="/{country?.name?.common.toLowerCase().replace(/\s/g,'-')}">{country?.name?.common}</a>
    {/each}
</main>



<style>
    :root {
        --box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
    :global(body) {
        font-family: "Nunito Sans", sans-serif;
        background: var(--bg);
        padding: 0;
        margin: 0;
    }
    .main {
        padding: 30px 20px 80px 20px;
    }
</style>

