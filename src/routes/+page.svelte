<script lang="ts">
    import Search from "$lib/components/Search.svelte";
    export let data: {countries: unknown};
    let filteredCountries = data.countries || [];
    const handleSearch = (event: CustomEvent) => {
        const searchTerm = event.detail;
        filteredCountries = data.countries.filter((item) =>
            item.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
</script>

<main class="main">
    <Search
            on:search={handleSearch}
    />
    {#each filteredCountries as country, i (i)}
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

