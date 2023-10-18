<script setup>
import MyIcon from '../components/elements/MyIcon.vue'
import MyTitle from './elements/MyTitle.vue';
import MyParagraph from './elements/MyParagraph.vue';

defineProps({
    title: String,
    subtitle: String,
    icon: String,
})
</script>

<template>
    <div class="cardff">
        <div class="cardff__content">
            <div class="cardff__icon">
                <MyIcon :name="icon" bgcolor="secondary" size="large" />
            </div>
            <div class="cardff__title">
                <MyTitle h="h4" :content="title"></MyTitle>
            </div>
            <div class="cardff__subtitle">
                <MyParagraph p="p1" :content="subtitle"></MyParagraph>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
.cardff {

    text-align: center;
    justify-content: center;
    max-width: rem(485);
    max-height: rem(485);
    border-radius: rem(40);
    border: rem(1) solid $gray;
    box-shadow: 0 0 5px 0 $gray;

    &__content {
        margin-top: rem(70);
    }

    &__icon {
        margin-top: rem(103);
        margin-bottom: rem(42);

    }

    &__title {
        margin-bottom: rem(42);
    }

    &__subtitle {
        margin-left: rem(60);
        margin-right: rem(60);
        margin-bottom: rem(103);
    }


}
</style>