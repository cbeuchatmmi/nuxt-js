<script setup>
const props = defineProps({
    image: Object,
    title: Array,
    text: Array,
    index: String,
})
</script>
<template>
    <div class="c-how-to-item" v-if="index === 0 || index === 2">
        <img :src="image.url" :alt="image.alt" class="c-how-to-item__image">
        <div class="c-how-to-item__content">
            <div v-if="index === 2">
                <div class="c-how-to-item__title--2">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#F48E28" />
                    </svg>
                    <PrismicRichText class="c-how-to-item__title" :field="title" />
                </div>
                <PrismicRichText class="c-how-to-item__text--2" :field="text" />
            </div>
            <div v-if="index === 0">
                <div class="c-how-to-item__title">
                    <PrismicRichText class="c-how-to-item__title" :field="title" />
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#F48E28" />
                    </svg>
                </div>
                <PrismicRichText class="c-how-to-item__text" :field="text" />
            </div>

        </div>
    </div>



    <div class="c-how-to-item" v-else>
        <div class="c-how-to-item__content">
            <div class="c-how-to-item__title--1">

                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#F48E28" />
                </svg>
                <PrismicRichText class="c-how-to-item__title" :field="title" />
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#F48E28" />
                </svg>
            </div>
            <PrismicRichText class="c-how-to-item__text" :field="text" />
        </div>
        <img :src="image.url" :alt="image.alt" class="c-how-to-item__image">
    </div>
</template>
<style lang="scss">
.c-how-to-item {
    &__content {
        width: rem(308);
    }

    &__title {
        display: flex;
        gap: rem(10);
        font-weight: bold;
        margin-bottom: rem(25);

        &--1 {
            display: flex;
            gap: rem(10);
            justify-content: center;
        }

        &--2 {
            display: flex;
            gap: rem(10);
            justify-content: end;
        }

    }

    &__text {
        font-weight: 100;

        &--2 {
            text-align: right;
        }
    }

    &__image {
        margin-bottom: rem(35);
    }
}
</style>