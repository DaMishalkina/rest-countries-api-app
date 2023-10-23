<script lang="ts">
    export let cardTitle  = "", cardLink = "",  cardInfos: string[], cardImage: string;
</script>

<a href={cardLink} class="card">
   <img
           class="card__image"
           src={cardImage}
           alt="{cardTitle} Flag"
   />
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
    .card__image {
        height: 200px;
        width: 100%;
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
</style>

