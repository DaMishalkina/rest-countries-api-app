<script lang="ts">
    import {base} from "$app/paths";
    import {theme} from "../lib/stores/theme";
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
</script>

<svelte:head>
    <meta name="color-scheme" content={
  $theme}/> <link rel="stylesheet" href={base +`/theme/${$theme}.css`} />
</svelte:head>
<header class="header">
    <div class="header__container">
        <h1 class="header__title">Where in the world?</h1>
        <ThemeSwitcher />
    </div>
</header>
<slot />

<style>
    .header {
        padding: 40px 20px;
        background: var(--elements-bg);
        box-shadow: var(--box-shadow);
    }
    .header__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
    }
    .header__title {
        font-size: 14px;
        font-weight: 800;
    }

    @media (min-width: 1200px) {
        .header {
            padding: 30px 50px;
        }
    }

</style>