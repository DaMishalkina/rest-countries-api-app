<script lang="ts">
    import {theme} from "$lib/stores/theme";
    export let label = "Dark Mode";
    let isDarkMode = $theme === "dark";
</script>

<label class="theme-toggle">
    <svg
            class="theme-toggle__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
    >
        <path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
              fill="{isDarkMode ?  'currentColor': 'none'}"
              stroke="{isDarkMode ?  'none' : 'currentColor'}"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"/>
    </svg>
    {label}
    <input
            class="theme-toggle__input"
            on:change|preventDefault={() => {
                isDarkMode = !isDarkMode;
                $theme = isDarkMode ? "dark" : "light"
            }}
            type="checkbox"
            bind:checked={isDarkMode}
    />
</label>

<style>
    .theme-toggle {
        display: flex;
        align-items: center;
        gap: 14px;
        color: var(--text-color);
        cursor: pointer;
        width: fit-content;
        font-size: 14px;
    }
    .theme-toggle:hover {
        opacity: 0.6;
    }
    .theme-toggle__input {
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
    }
    .theme-toggle__icon {
        height: 15px;
        width: 15px;
        transition: all 0.2s linear;
    }
    .theme-toggle:active .theme-toggle__icon {
       transform: rotate(360deg);
    }

</style>