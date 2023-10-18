<script setup>
import MyCardFS from '../components/MyCardFS.vue';
import { reactive } from 'vue'
const response = [
    {
        id: 1,
        subtitle: 'Mushroom Sauce',
        prix: '5.15',
        title: 'Burger',
        imageSrc: 'Burger.png',
        imageAlt: 'Image de Burger',
    },
    {
        id: 2,
        subtitle: 'Mushroom Sauce',
        prix: '9.15',
        title: 'Food Combo',
        imageSrc: 'Menu.png',
        imageAlt: 'Image de Food Combo',

    },
    {
        id: 3,
        subtitle: 'Mushroom Sauce',
        prix: '6.15',
        title: 'Pizza',
        imageSrc: 'Pizza.png',
        imageAlt: 'Pizza',


    },
    {
        id: 4,
        subtitle: 'Mushroom Sauce',
        prix: '15.00',
        title: 'Cake',
        imageSrc: 'Gateau.png',
        imageAlt: 'Image de Cake',
    },

]
const cards = reactive(response)
</script>
<template>
    <div class="cards">
        <MyCardFS v-for="card in cards" v-bind='card' :key="card.id" />

    </div>
</template>
<style lang="scss" scoped>
.cards {
    display: grid;
    grid-template-columns: repeat(2, 0.25fr);
    align-items: center;
    justify-content: center;
    gap: rem(25);
}
</style>