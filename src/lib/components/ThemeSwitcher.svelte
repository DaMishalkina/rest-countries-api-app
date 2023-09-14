<script lang="ts">
    import {theme} from "$lib/stores/theme";
    export let label = "Dark Mode";
    let isDarkMode = $theme === "dark";
</script>


<!--<select bind:value="{$theme}">-->
<!--    <option value="system">System</option>-->
<!--    <option value="light">Light</option>-->
<!--    <option value="dark">Dark</option>-->
<!--</select>-->

<label>
    {label}
    <input
            on:change|preventDefault={() => {
                isDarkMode = !isDarkMode;
                $theme = isDarkMode ? "dark" : "light"
            }}
            type="checkbox"
            bind:checked={isDarkMode}
    />
</label>