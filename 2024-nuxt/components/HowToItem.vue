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
            <div class="c-how-to-item__title">
                <div v-if="index === 2">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#F48E28" />
                    </svg>
                </div>
                <PrismicRichText class="c-how-to-item__title" :field="title" />
                <div v-if="index === 0">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#F48E28" />
                    </svg>
                </div>
            </div>
            <PrismicRichText class="c-how-to-item__text" :field="text" />
        </div>
    </div>
    <div class="c-how-to-item" v-else>
        <div class="c-how-to-item__content">
            <div class="c-how-to-item__title">

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
    &__title {
        display: flex;
        gap: rem(10);
        font-weight: bold;
    }
}
</style>