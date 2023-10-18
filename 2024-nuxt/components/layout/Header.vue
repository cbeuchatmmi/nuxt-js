<script setup>
import { useGlobalStore } from '@/stores/global'
const store = useGlobalStore()
console.log(store)


</script>
<template>
    <div class="c-header">
        <div class="c-header__text">
            Le header
        </div>
        <div class="c-header__count">
            {{ store.count }}
            {{ store.cart }}
        </div>
    </div>
</template>
<style lang="scss">
.c-header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

}
</style>