<script lang="ts">
    import type {Countries} from "$lib/types";
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
    export let data: Countries;
</script>

<h1>Welcome to SvelteKit</h1>
<ThemeSwitcher />
<div>
    {#each data?.countries as country, i (i)}
        <a href="/{country?.name?.common.toLowerCase().replace(/\s/g,'-')}">{country?.name?.common}</a>
    {/each}
</div>



<style>
    :global(body) {
        font-family: "Nunito Sans", sans-serif;
        background: var(--bg);
    }
</style>

