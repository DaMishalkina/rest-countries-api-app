<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import {searchQuery} from "../stores/searchQuery";

    const dispatch = createEventDispatcher<{search: unknown}>();
    let searchValue = $searchQuery.searchTerm;
    const handleSearch = () => {
        $searchQuery.searchTerm = searchValue;
        dispatch("search");
    }

</script>

<label>
    <input
            bind:value={searchValue}
            on:input={handleSearch}
            type="text"
    />
</label>


<style>

</style>