<script setup>
const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle('homepage'))


if (!home.value || error.value) {
    throw createError({ statusCode: 404, statusMessage: 'La page d\'acceuil est introuvable' })
}

console.log(home)

useSeoMeta({
    title: home.value.data.meta_title,
    ogTitle: home.value.data.meta_title,
    description: home.value.data.meta_description,
    ogDescription: home.value.data.meta_description,
    ogImage: home.value.data.meta_image.url,
    twitterCard: 'summary_large_image',
})

</script>
<template>
    <div class="p-index">

        <Hero :title="home.data.hero_title" :text="home.data.hero_text" :buttons="home.data.hero_buttons" />
        <MyShortLists />
        <MyCards />
        <MyCardsFF />
        <HowTo
            v-bind="{ tag: 'How to work', title: 'Food Us An Important Part Of A Balanced Diet', items: home.data.how_to }" />
    </div>
</template>
<style></style>