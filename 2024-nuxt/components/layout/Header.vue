<script setup>
import { useGlobalStore } from '@/stores/global'
const store = useGlobalStore()
console.log(store)


</script>
<template>
    <div class="c-header">
        <a class="c-header__logo" href="/">
            <img class="c-header__logo--img" src="../../assets/logo.png" alt="logo">
        </a>
        <nav class="c-header__nav">
            <ul class="c-header__nav--ul">
                <li><a class="c-header__nav--lien" href="#">Home</a></li>
                <li><a class="c-header__nav--lien" href="#">Menu</a></li>
                <li><a class="c-header__nav--lien" href="#">Service</a></li>
                <li><a class="c-header__nav--lien" href="#">Shope</a></li>
            </ul>
        </nav>
        <div class="c-header__search">
            <MySearch />
        </div>
    </div>
</template>
<style lang="scss">
.c-header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    &__logo {
        margin-left: rem(180);
    }

    &__nav {
        display: flex;


        &--ul {
            display: flex;
            gap: rem(67);
            align-items: center;


        }

        &--lien {
            color: black;
            text-decoration: none;
            font-size: $regular-font-size;
            font-weight: 550;

        }
    }

    &__search {
        margin-right: rem(180);
        align-items: center;
    }

}
</style>