<script lang="ts">
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher<{search: string}>();
    let searchValue = "";
    const handleSearch = () => {
        dispatch("search", searchValue);
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