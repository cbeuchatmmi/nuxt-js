<script setup>
import { useGlobalStore } from '@/stores/global'
const store = useGlobalStore()
import MyCard from './MyCard.vue';
import { reactive } from 'vue'
const response = [
    {
        id: 1,
        buttonLabel: 'Add to card',
        imageSrc: 'Gyro_sandwich.jpg',
        imageAlt: 'Gyro Sandwich',
        note: '4.9',
        prix: '15.00',
        title: 'Gyro Sandwich',
    },
    {
        id: 2,
        buttonLabel: 'Add to card',
        imageSrc: 'Enchilade.jpg',
        imageAlt: 'Enchilade',
        note: '5.0',
        prix: '25.50',
        title: 'Enchilade',

    },
    {
        id: 3,
        buttonLabel: 'Add to card',
        imageSrc: 'Green_beans.jpg',
        imageAlt: 'Green Beans',
        note: '4.9',
        prix: '12.00',
        title: 'Green Beans',


    },
    {
        id: 4,
        buttonLabel: 'Add to card',
        imageSrc: 'Pizza.jpg',
        imageAlt: 'Pizza',
        note: '5.0',
        prix: '18.50',
        title: 'Pizza',
    },
    {
        id: 5,
        buttonLabel: 'Add to card',
        imageSrc: 'Chiken_pot_pie.jpg',
        imageAlt: 'Chiken Pot Pie',
        note: '4.9',
        prix: '25.00',
        title: 'Chiken Pot Pie',
    },
    {
        id: 6,
        imageSrc: 'Green_salad.jpg',
        buttonLabel: 'Add to card',
        imageAlt: 'Green Salad',
        note: '4.9',
        prix: '15.00',
        title: 'Green Salad',
    },
]
const cards = reactive(response)
</script>
<template>
    <div class="cards">
        <MyCard v-for="card in cards" v-bind='card' :key="card.id" />

    </div>
</template>
<style lang="scss" scoped>
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(25)
}
</style>