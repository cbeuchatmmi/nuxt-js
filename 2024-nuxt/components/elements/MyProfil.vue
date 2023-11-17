<script setup>
const props = defineProps({
    nbrindex: String,
    index: String,
    image: Object,
    name: Array,
    metier: Array,
    avis: Array,
})
</script>
<template>
    <div class="profil" v-if="index === nbrindex">
        <div class="profil__content">
            <img :src="image.url" :alt="image.alt">
            <div>
                <PrismicRichText class="profil__name" :field="name" />
                <PrismicRichText class="profil__metier" :field="metier" />
            </div>
        </div>
        <div class="profil__avis">
            <PrismicRichText :field="avis" />
        </div>
    </div>
</template>
<style lang="scss">
.profil {
    &__content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__name {
        font-weight: bold;
        font-size: $regular-font-size;
    }

    &__metier {
        font-size: $small-font-size
    }

    &__avis {
        text-align: center;
        font-size: $regular-font-size ;

    }
}
</style>