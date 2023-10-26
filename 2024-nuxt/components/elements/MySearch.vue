<script setup>

import { useGlobalStore } from '@/stores/global'
const store = useGlobalStore()
console.log(store)


</script>
<template>
    <div class="c-search">
        <div class="c-search__search">
            <IconLoupe />
            <input type="text" class="c-search__search--search" placeholder="Search">

        </div>
        <span class="c-search__barre"></span>
        <div class="c-search__panier">
            <IconPanier />
            <div class="c-search__panier--store">
                {{ store.count }}
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.c-search {
    background-color: white;
    border-radius: rem(5);
    box-shadow: 0 0 5px 0 $gray;
    display: flex;
    justify-content: center;
    padding: rem(10);

    &__search {
        display: flex;

        &--search {
            color: black;
            font-size: $regular-font-size;
            border: none;
            margin-left: rem(5);
        }
    }

    &__barre {
        border-left: rem(1) solid $gray;
        margin-right: rem(33);
    }

    &__panier {

        position: relative;

        &--store {
            position: absolute;
            right: rem(-5);
            top: rem(-5);
            background-color: $primary-color;
            font-size: $small-font-size;
            color: white;
            width: rem(15);
            height: rem(15);
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

}
</style>