<script lang="ts">
    export let cardTitle  = "", cardLink = "",  cardInfos: string[], cardImage: string;
</script>

<a href={cardLink} class="card">
    <div class="card__image-container">
        <img
                class="card__image"
                src={cardImage}
                alt="{cardTitle} Flag"
        />
    </div>
    <div class="card__content">
        <p class="card__title">{cardTitle}</p>
        <ul class="card-infos card__infos">
            {#each cardInfos as cardInfo, i (i)}
                <li class="card-info">
                    <span class="card-info__field-name">{cardInfo.split(":")[0]}: </span>
                    <span>{cardInfo.split(":")[1]}</span>
                </li>
            {/each}
        </ul>
    </div>
</a>

<style>
    .card {
        border-radius: 5px;
        background: var(--elements-bg);
        overflow: auto;
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: var(--text-color);
        box-shadow: var(--box-shadow);
    }
    .card__image-container {
        background: var(--elements-bg--blur);
        position: relative;
        max-height: 200px;
        max-width: 100%;
        width: 100%;
        height: 200px;
        display: flex;
    }
    .card__image {
        max-height: 200px;
        max-width: 100%;
        width: auto;
        margin: auto auto;
        display: flex;
    }
    .card__content {
        padding: 38px 30px 58px 30px;
        display: flex;
        flex-direction: column;
        gap: 28px;
    }
    .card__title {
        font-size: 16px;
        font-weight: 800;
    }
    .card-infos {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .card-info {
        font-size: 14px;
    }
    .card-info__field-name {
        font-weight: 600;
    }
    @media (min-width: 1200px) {
        .card__content {
            padding: 30px 25px 46px 25px;
            gap: 23px;
        }
        .card-infos {
            gap: 11px;
        }
    }
</style>

