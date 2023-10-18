<script setup>
defineProps({
    h: String,
    content: String,
})

const h1 = 'h1';
const h2 = 'h2';
const h3 = 'h3';
const h4 = 'h4';
const h5 = 'h5';
</script>

<template>
    <div class="title">
        <h1 v-if="h === h1" class="title__h1">{{ content }}</h1>
        <h2 v-if="h === h2" class="title__h2">{{ content }}</h2>
        <h3 v-if="h === h3" class="title__h3">{{ content }}</h3>
        <h4 v-if="h === h4" class="title__h4">{{ content }}</h4>
        <h5 v-if="h === h5" class="title__h5">{{ content }}</h5>
    </div>
</template>

<style lang="scss" scoped>
.title {
    font-family: $primary-font-familly;
    font-weight: bold;


    &__h1 {
        font-size: $giant-font-size ;
    }

    &__h2 {
        font-size: $bigger-font-size
    }

    &__h3 {
        font-size: $big-font-size;
    }

    &__h4 {
        font-size: $medium-font-size;
    }

    &__h5 {
        font-size: $regular-font-size;
    }

}
</style>



