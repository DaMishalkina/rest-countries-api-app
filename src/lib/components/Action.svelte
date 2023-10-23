<script lang="ts">
    export let link = "", title = "", isLarge = false;

</script>


<a
        href={link}
        class="action"
        class:action--large={isLarge}
>
    <slot/>
    {title}
</a>

<style>
    .action {
        display: flex;
        padding: 14px 20px;
        justify-content: center;
        align-items: center;
        background: var(--elements-bg);
        text-decoration: none;
        color: var(--text-color);
        box-shadow: var(--box-shadow);
        border: none;
        border-radius: 3px;
        font-size: 16px;
        gap: 20px;
        flex: 1;
        white-space: nowrap;
    }
    .action--large {
        padding: 16px 50px;
        align-self: flex-start;
    }
    .action:hover {
        transform: translateY(-3px);
    }
    .action:active, .action:focus {
        transform: translateY(-1px);
    }
</style>


