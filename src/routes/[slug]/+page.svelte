<script lang="ts">
    import type {MainCountry, BorderCountry} from "$lib/types";
    import Action from "$lib/components/Action.svelte";

    export let data: {country: MainCountry, borders: BorderCountry[]};
</script>

<main class="main">
    <Action link="/" title="Back" isLarge>
        <svg
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
        >
            <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/>
        </svg>
    </Action>
    <section>
        <h1>{data?.country.name.common}</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        {#if data?.borders.length > 0}
            <div class="country__borders">
                {#each data?.borders as border (border.name.common)}
                  <Action
                          link="/{border.name.common.toLowerCase().replace(/\s/g,'-')}"
                          title={border.name.common}
                  />
                {/each}
            </div>
        {/if}
    </section>
</main>

<style>
    .main {
        display: flex;
        flex-direction: column;
        padding: 80px 55px 120px 55px;
    }
    .country__borders {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
    }
</style>



