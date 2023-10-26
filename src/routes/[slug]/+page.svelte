<script lang="ts">
    import Action from "$lib/components/Action.svelte";
    import {base} from "$app/paths";
    import {divideNumberWithComa} from "$lib/utils/divideNumberWithComa";
    import {replaceSpaceWithDash} from "$lib/utils/replaceSpaceWithDash";

    import type {MainCountry, BorderCountry} from "../../lib/types";
    import type {LocalDataCountry} from "../../lib/types";
    export let data: {country: MainCountry | LocalDataCountry, borders: LocalDataCountry[] | BorderCountry[]};
    $: countryData = typeof data?.country?.name === "string" ? {
        "name": (data?.country as LocalDataCountry)?.name,
        "native name":  (data?.country as LocalDataCountry)?.nativeName,
        "population": divideNumberWithComa( (data?.country as LocalDataCountry)?.population),
        "region":  (data?.country as LocalDataCountry)?.region,
        "sub region":  (data?.country as LocalDataCountry)?.subregion,
        "capital":  (data?.country as LocalDataCountry)?.capital,
        "top level domain": (data?.country as LocalDataCountry)?.topLevelDomain[0],
        "currencies": Object.values((data?.country as LocalDataCountry)?.currencies).map(currency => currency.name).join(", "),
        "languages": (data?.country as LocalDataCountry)?.languages.map(language => language.name).join(", "),
        } : {
        "name": (data?.country as MainCountry)?.name?.common,
       "native name": Object.entries((data?.country as MainCountry)?.name?.nativeName).map(([language, name]) => `${name.common} (${language})`).join(", "),
        "population": divideNumberWithComa((data?.country as MainCountry)?.population),
        "region": (data?.country as MainCountry)?.region,
        "sub region":(data?.country as MainCountry)?.subregion,
        "capital": (data?.country as MainCountry)?.capital[0],
        ...((data?.country as MainCountry)?.tld && {"top level domain": (data?.country as MainCountry).tld[0]}),
        ...((data?.country as MainCountry)?.currencies && { "currencies": Object.values((data?.country as MainCountry)?.currencies).map(currency => currency.name).join(", ")}),
        ...((data?.country as MainCountry)?.languages && { "languages": Object.values((data?.country as MainCountry)?.languages).join(", ")})
    }

    $: bordersData = data?.borders?.map(border => {
        if(typeof border?.name === "string"){
            return {
                "name": (border as LocalDataCountry).name,
                "cca3": (border as LocalDataCountry).alpha3Code
            }
        }
        return {
            "name": (border as BorderCountry).name.common,
            "cca3": (border as BorderCountry).cca3
        }
    })


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
                alt="{countryData.name} Flag"
        >
        <div class="country-data__text">
            <h1 class="country-data__title">{countryData.name}</h1>
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
                {#if bordersData.length > 0}
                    <div class="borders-container country-data__borders-container">
                        <p class="borders-container__title">Border Countries:</p>
                        <ul class="borders-container__list">
                            {#each bordersData as border (border.cca3)}
                                <li>
                                    <Action
                                            link={base + `/${replaceSpaceWithDash(border?.cca3)}`}
                                            title={border?.name}
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



