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
    <div class="shortlist">

        <div class="shortlist__icon">
            <MyIcon :name="icon" bgcolor="primary" size="small" />
        </div>
        <div class="shortlist__title">
            <MyTitle h="h5" :content="title"></MyTitle>
        </div>
        <div class="shortlist__subtitle">
            <MyParagraph p="p2" :content="subtitle"></MyParagraph>
        </div>

    </div>
</template>

<style lang="scss">
.shortlist {
    text-align: center;
    justify-content: center;


    &__icon {
        margin-bottom: rem(12);
    }

    &__title {
        margin-bottom: rem(6);
    }



}
</style>