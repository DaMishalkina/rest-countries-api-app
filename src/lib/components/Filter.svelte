<script lang="ts">
    import {searchQuery} from "../stores/searchQuery";
    import {createEventDispatcher} from "svelte";
    export let title = "", options: string[];
    const filterDefaultValue = `Filter by ${title}`;
    const dispatch = createEventDispatcher<{select: unknown}>();
    let selectedValue = $searchQuery.selectedFilter;
    const onSelect = () => {
        $searchQuery.selectedFilter = selectedValue;
        dispatch("select")
    }

</script>

<label>
<!--    bind:value before on:change - important!-->
    <select name={title} bind:value={selectedValue} on:change={onSelect}>
        <option value="">{filterDefaultValue}</option>
        {#each options as option (option)}
            <option value={option}>{option}</option>
        {/each}
    </select>
</label>

<style>

</style>