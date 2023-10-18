<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script> 
<template>
    <div class="p-recipe-id">
        recette id : {{ route.params.id }}
    </div>
</template>
<style></style>