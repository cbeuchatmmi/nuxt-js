<script setup>
import { useGlobalStore } from '@/stores/global'
const store = useGlobalStore()
console.log(store)


</script>
<template>
    <div class="c-header">

        <nav>
            <ul>
                <li><a href="#">Nav link 1</a></li>
                <li><a href="#">Nav link 2</a></li>
                <li><a href="#">Nav link 3</a></li>
                <li><a href="#">Nav link 4</a></li>
            </ul>
        </nav>
        <MySearch />
    </div>
</template>
<style lang="scss">
.c-header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

}
</style>