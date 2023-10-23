<script lang="ts">
    import {searchQuery} from "../stores/searchQuery";
    import {createEventDispatcher} from "svelte";
    export let title = "", options: string[];
    const filterDefaultValue = `Filter by ${title}`;
    const dispatch = createEventDispatcher<{select: unknown}>();
    let selectedValue = $searchQuery.selectedFilter.length > 0 ? $searchQuery.selectedFilter : filterDefaultValue;
    let isOpened = false;
    const onSelect = (option: string) => {
        if (selectedValue === option){
            selectedValue = filterDefaultValue;
            $searchQuery.selectedFilter = "";
        } else {
            selectedValue = option;
            $searchQuery.selectedFilter = selectedValue;
        }
        isOpened = !isOpened;
        dispatch("select");
    }


</script>
<div class="select">
    <button
            class="select__button"
            role="combobox"
            aria-labelledby="select button"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-controls="select-dropdown"
            on:click={() => isOpened = !isOpened}
    >
        <span class="select__selected-value">{selectedValue}</span>
        <svg
                class="arrow-icon select__icon"
                class:arrow-icon--up={isOpened}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="10px"
                width="10px"
                id="Layer_1"
                viewBox="0 0 330 330"
                xml:space="preserve"
        >
            <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
        </svg>
    </button>
    <ul class="select-dropdown select__dropdown"
        class:select-dropdown--visible={isOpened}
        role="listbox"
    >
        {#each options as option (option)}
            <li
                    class="dropdown-item select-dropdown__item"
                    role="option"
                    aria-selected={selectedValue === option}
            >
               <label
                       class="select-checkbox dropdown-item__checkbox"
                       class:select-checkbox--checked={selectedValue === option}
               >
                   {option}
                   <input
                           type="checkbox"
                           on:change={() => onSelect(option)}
                           checked={selectedValue === option}
                   />
               </label>
            </li>
        {/each}
    </ul>
</div>

<style>
    .select {
        position: relative;
        width: 100%;
        max-width: 248px;
    }
    .select__button {
        width: 100%;
        background: var(--elements-bg);
        color: var(--text-color);
        border: none;
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: var(--box-shadow);
        border-radius: 4px;
        font-size: 14px;
    }
    .arrow-icon--up {
        transform: rotate(180deg);
    }
    .select__dropdown {
        display: none;
    }
    .select-dropdown--visible {
        position: absolute;
        max-width: 248px;
        top: 100%;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        box-shadow: var(--box-shadow);
        background: var(--elements-bg);
        border-radius: 4px;
        list-style: none;
        margin: 4px 0 0 0;
        padding: 16px 12px;
        overflow-y: auto;
    }
    .select-dropdown__item {
        display: block;
        font-size: 14px;
    }
    .dropdown-item__checkbox {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        padding: 8px 12px;
    }
    .dropdown-item__checkbox:hover {
        background: var(--elements-bg--hover);
    }
    .select-checkbox--checked {
        background: var(--elements-bg--hover);
    }
    .dropdown-item__checkbox :global(input) {
        width: 0;
        height: 0;
        opacity: 0;
    }
</style>