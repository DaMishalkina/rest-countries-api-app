<script lang="ts">
    import type {MainCountry} from "$lib/types";
    export let data: MainCountry;
</script>

<!--<h1>{data.slug.replace(/-/g, " ")}</h1>-->

<pre>{JSON.stringify(data, null, 2)}</pre>


