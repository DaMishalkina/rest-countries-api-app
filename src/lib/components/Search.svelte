<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import {searchQuery} from "../stores/searchQuery";
    export let placeholder = "Search for a country...";
    const dispatch = createEventDispatcher<{search: unknown}>();
    let searchValue =  $searchQuery.searchTerm;
    const handleSearch = () => {
        $searchQuery.searchTerm = searchValue;
        dispatch("search");
    }

</script>

<label class="search-container">
    <svg
            class="search-container__icon"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
    >
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
        </path>
    </svg>
    <input
            placeholder={placeholder}
            class="search-container__input"
            bind:value={searchValue}
            on:input={handleSearch}
            type="text"
    />
</label>


<style>
.search-container {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 480px;
}
.search-container__icon {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    left: 40px;
}
.search-container:hover {
    transform: translateY(-3px);
}
.search-container:active, .search-container:focus {
    transform: translateY(-1px);
}
.search-container__input {
    border: none;
    box-shadow: var(--box-shadow);
    background: var(--elements-bg);
    border-radius: 4px;
    padding: 20px 40px 20px 90px;
    display: flex;
    width: 100%;
    color: var(--text-color);
    font-family: "Nunito Sans", sans-serif;
    font-size: 14px;
}
.search-container__input:active, .search-container__input:focus {
    outline: none;
}
.search-container__input::placeholder {
    color: var(--text-color);
}

</style>