<script setup>
import MyIcon from '../components/elements/MyIcon.vue'
import MyTitle from './elements/MyTitle.vue';
import MyParagraph from './elements/MyParagraph.vue';

defineProps({
    imageSrc: String,
    imageAlt: String,
    title: String,
    subtitle: String,
    prix: String,
})
</script>

<template>
    <div class="cardfs">
        <div class="cardfs__image">
            <img :src="imageSrc" :alt="imageAlt" />
        </div>
        <div class="cardfs__content">
            <div class="cardfs__title">
                <MyTitle h="h4" :content="title"></MyTitle>
            </div>
            <div class="cardfs__subtitle">
                <MyParagraph p="p1" :content="subtitle"></MyParagraph>
            </div>
            <div class="cardfs__prix">
                <MyParagraph class="cardfs__red" p="p1" content="$"></MyParagraph>
                <MyParagraph p="p1" :content='prix'></MyParagraph>
            </div>
            <div class="cardfs__icon">
                <MyIcon name="arrowright" bgcolor="black" size="small" />
                <MyIcon name="arrowleft" size="small" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.cardfs {
    text-align: center;

    &__image {
        max-width: rem(258);
        max-height: rem(254);
        margin-bottom: rem(-150);
        position: relative;
        z-index: 1;
    }


    &__content {
        position: relative;
        max-width: rem(258);
        max-height: rem(275);
        border-radius: rem(40);
        border: rem(1) solid $white;
        box-shadow: 0 0 10px 0 #ddd;
        padding: rem(0) rem(0);
        background-color: white;

        >*+* {
            margin-top: rem(20);
        }
    }

    &__title {
        margin-top: rem(100);
    }

    // &__subtitle {}

    &__icon {
        display: inline-flex;
        justify-content: center;
        gap: rem(36);
        position: absolute;
        bottom: -20px;
        left: rem(0);
        width: 100%;
    }

    &__prix {
        font-weight: bold;
        padding-bottom: rem(30);
        display: inline-flex;
    }

    &__red {
        color: #EE140A;
    }
}
</style>