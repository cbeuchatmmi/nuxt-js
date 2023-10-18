<script setup>
const store = useGlobalStore()
onMounted(() => {
  const cart = localStorage.getItem('cart')
  store.setCart(JSON.parse(cart))

})

</script>

<template>
  <div>

    <NuxtLayout />
  </div>
</template>
