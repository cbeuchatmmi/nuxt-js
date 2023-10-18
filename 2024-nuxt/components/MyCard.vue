<script setup>
import { useGlobalStore } from '@/stores/global'
const store = useGlobalStore()
//import MyTitle from './element/MyTitle.vue'
import MyButton from '../components/elements/MyButton.vue'
import IconStar from './icons/IconStar.vue';
import MyTitle from './elements/MyTitle.vue';
import MyParagraph from './elements/MyParagraph.vue';

defineProps({
    id: String,
    imageSrc: String,
    imageAlt: String,
    title: String,
    note: String,
    prix: String,
    buttonLabel: String,
})
</script>

<template>
    <div class="card">
        <div class="card__image">
            <img :src="imageSrc" :alt="imageAlt" />
        </div>
        <div class="card__content">
            <div class="card__title">
                <MyTitle h="h4" :content="title"></MyTitle>
            </div>
            <div class="card__note">
                <IconStar />
                <MyParagraph p="p2" :content="note"></MyParagraph>
            </div>
            <div class="card__button">
                <MyButton variant="rounded" size="small" h="p2" color="primary" @click="store.addToCart(id)">{{
                    buttonLabel }}</MyButton>

            </div>
            <div class="card__prix">
                <MyParagraph p="p1" :content='"$" + prix'></MyParagraph>
                <p></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    max-width: rem(485);
    max-height: rem(485);
    border-radius: rem(40);
    border: rem(1) solid $gray;
    box-shadow: 0 0 5px 0 $gray;

    overflow: hidden;
    font-size: $regular-font-size;



    &__content {
        padding: rem(20) rem(10);
        display: grid;
        grid-template-columns: repeat(2, 2fr);
        text-align: right;
    }

    &__title {
        text-align: left;

    }

    &__note {
        display: flex;
        align-items: center;
        gap: rem(2);
        font-size: $small-font-size;
        justify-content: end;

    }

    &__button {
        text-align: center;
        margin-top: rem(20);
    }

    &__prix {
        margin-top: rem(20);
    }
}
</style>