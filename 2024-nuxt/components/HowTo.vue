<script setup>
const props = defineProps({
    tag: String,
    title: String,
    items: Array,
})

</script>
<template>
    <section class="c-how-to">
        <span class="c-how-to__tag">{{ tag }}</span>
        <h3 class="c-how-to__title">{{ title }}</h3>
        <div class="c-how-to__list">
            <div class="c-how-to__item" v-for="(item, index) in items">
                <HowToItem :index="index" :title="item.how_to_title" :text="item.how_to_text" :image="item.how_to_image" />

            </div>
        </div>
    </section>
</template>
<style lang="scss">
.c-how-to {
    text-align: center;

    &__tag {
        color: $primary-color;
        font-size: $regular-font-size ;

    }

    &__title {
        font-size: $big-font-size;
        font-weight: bold;
        margin-bottom: rem(51);

    }

    &__list {
        display: flex;
        justify-content: center;
        gap: rem(223);
        text-align: left;
    }
}
</style>