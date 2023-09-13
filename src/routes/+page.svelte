<script lang="ts">
    export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<div>
    {#each data?.countries as country, i (i)}
        <a href="/{country?.name?.official.toLowerCase().replace(/\s/g,'-')}">{country?.name?.official}</a>
    {/each}
</div>

