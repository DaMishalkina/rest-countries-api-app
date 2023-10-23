<script lang="ts">
    import type {MainCountry, BorderCountry} from "$lib/types";
    import Action from "$lib/components/Action.svelte";
    import {divideNumberWithComa} from "$lib/utils/divideNumberWithComa";
    import {replaceSpaceWithDash} from "$lib/utils/replaceSpaceWithDash";

    export let data: {country: MainCountry, borders: BorderCountry[]};
    $: countryData = {
        "native name": Object.entries(data?.country?.name?.nativeName).map(([language, name]) => `${name.common} (${language})`).join(", "),
        "population": divideNumberWithComa(data?.country?.population),
        "region": data?.country?.region,
        "sub region": data?.country?.subregion,
        "capital": data?.country?.capital[0],
        ...(data?.country?.tld && {"top level domain": data.country.tld[0]}),
        ...(data?.country?.currencies && { "currencies": Object.values(data.country.currencies).map(currency => currency.name).join(", ")}),
        ...(data?.country?.languages && { "languages": Object.values(data.country.languages).join(", ")}),

    }
</script>

<main class="main">
    <Action link="/" title="Back" isLarge>
        <svg
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
        >
            <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/>
        </svg>
    </Action>
    <section class="country-data main__country-data">
        <img
                class="country-data__image"
                src={data?.country?.flags?.png}
                alt="{data?.country?.name?.common} Flag"
        >
        <div class="country-data__text">
            <h1 class="country-data__title">{data?.country?.name?.common}</h1>
            <div class="country-details country-data__details">
                <ul class="country-details__list">
                    {#each Object.entries(countryData).slice(0, 5) as [key, value] (key)}
                        <li class="country-detail country-details__item">
                            <span class="country-detail__field-name">{key}: </span>
                            <span>{value}</span>
                        </li>
                    {/each}
                </ul>
                <ul class="country-details__list">
                    {#each Object.entries(countryData).slice(5) as [key, value] (key)}
                        <li class="country-detail country-details__item">
                            <span class="country-detail__field-name">{key}: </span>
                            <span>{value}</span>
                        </li>
                    {/each}
                </ul>
                {#if data?.borders.length > 0}
                    <div class="borders-container country-data__borders-container">
                        <p class="borders-container__title">Border Countries:</p>
                        <ul class="borders-container__list">
                            {#each data?.borders as border (border.name.common)}
                                <li>
                                    <Action
                                            link="/{replaceSpaceWithDash(border?.name?.official)}"
                                            title={border?.name?.common}
                                    />
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/if}
            </div>
        </div>
    </section>
</main>

<style>
    :global(body) {
        font-family: "Nunito Sans", sans-serif;
        background: var(--bg);
        padding: 0;
        margin: 0;
    }
    :global(ul), :global(li){
        list-style: none;
        margin: 0;
        padding: 0;
    }
    :global(button){
        cursor: pointer;
    }
    :global(p){
        margin: 0;
    }
    .main {
        display: flex;
        flex-direction: column;
        padding: 80px 55px 100px 55px;
        gap: 60px;
    }
    .country-data__image {
        width: 100%;
        max-height: 458px;
        display: flex;
    }
    .country-data__title {
        margin: 60px 0;
    }
    .borders-container__title {
        font-size: 18px;
        font-weight: 600;
    }
    .borders-container__list {
        display: flex;
        gap: 20px;
        width: 100%;
        overflow: auto;
        padding: 20px 0;
    }
    .country-details {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }
    .country-details__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 16px;
    }
    .country-detail__field-name {
        text-transform: capitalize;
        font-weight: 600;
    }
    @media (min-width: 750px) {
        .main {
            gap: 128px;
        }
        .country-data__title {
            margin: 100px 0 60px 0;
        }
        .country-details__list {
            gap: 40px;
        }
        .country-details {
            gap: 96px;
        }
        .borders-container__list {
            padding: 40px 0 20px 0;
        }
    }
    @media (min-width: 1200px) {
        .main {
            max-width: 1200px;
            margin: 0 auto;
            gap: 80px;
        }
        .country-data {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .country-data__image {
            min-width: 560px;
            width: 560px;
            height: 402px;
            margin-right: 60px;
        }
        .country-data__title {
            margin: 0 0 40px 0;
        }
        .country-details {
            row-gap: 56px;
            column-gap: 120px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        .country-details__list {
            gap: 18px;
        }
        .borders-container {
            display: flex;
            grid-column: 1 /span 2;
            gap: 15px;
            align-items: center;
        }
        .borders-container__title {
            padding: 20px 0;
            white-space: nowrap;
            font-size: 16px;
        }
        .borders-container__list {
            padding: 20px 0;
        }

    }
</style>



