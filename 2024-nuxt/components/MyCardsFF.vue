
<script setup>
import MyCardFF from './MyCardFF.vue';
import { reactive } from 'vue'
const response = [
    {
        id: '1',
        title: 'Qualityfull Food',
        subtitle: 'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.',
        icon: 'quality',
    },
    {
        id: '2',
        title: 'Healthy Food',
        subtitle: 'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.',
        icon: 'healthy',

    },
    {
        id: '3',
        title: 'Fast Delivery',
        subtitle: 'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.',
        icon: 'truck',


    },

]
const cards = reactive(response)
</script>
<template>
    <div class="mycardsff">
        <div class="mycardsff__title">
            <MyParagraph p="p1" content="Services" class="mycardsff__title--paragraph"></MyParagraph>
            <MyTitle h="h3" content="Why Choose Our Favorite Food"></MyTitle>
        </div>
        <div class="mycardsff__cards">
            <MyCardFF v-for="card in cards" v-bind='card' :key="card.id" />
        </div>

    </div>
</template>
<style lang="scss" scoped>
.mycardsff {
    margin-top: rem(135);

    &__cards {

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: rem(25);
    }

    &__title {
        text-align: center;
        margin-bottom: rem(57);

        &--paragraph {
            color: $primary-color;
        }
    }
}
</style>