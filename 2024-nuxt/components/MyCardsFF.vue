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
    <div class="cards">
        <MyCardFF v-for="card in cards" v-bind='card' :key="card.id" />

    </div>
</template>
<style lang="scss" scoped>
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(25)
}
</style>