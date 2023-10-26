<script setup>
import MyShortList from '../components/MyShortList.vue';
import { reactive } from 'vue'
const response = [
    {
        id: 1,
        title: 'Today 10:00am - 10:00pm',
        subtitle: 'Working time',
        icon: 'horloge',
    },
    {
        id: 2,
        title: 'Washington, D.C., DC,USA',
        subtitle: 'Our Location',
        icon: 'locate',

    },
    {
        id: 3,
        title: '+0123 456 7891',
        subtitle: 'Phone Number',
        icon: 'phone',

    },


]
const cards = reactive(response)
</script>
<template>
    <div class="myshortlist">
        <MyShortList v-for="card in cards" v-bind='card' :key="card.id" />

    </div>
</template>
<style lang="scss" scoped>
.myshortlist {
    margin-top: rem(135);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;

    *:not(:last-child) {
        border-right: rem(1) solid $grey;

    }

}
</style>