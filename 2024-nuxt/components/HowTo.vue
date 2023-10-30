<script setup>
const props = defineProps({
    tag: String,
    title: String,
    items: Array,
})

</script>
<template>
    <section class="c-how-to">
        <span class="c-how-to__tag">{{ tag }}</span>
        <h3 class="c-how-to__title">{{ title }}</h3>
        <div class="c-how-to__list">
            <div class="c-how-to__item" v-for="(item, index) in items">
                <HowToItem :index="index" :title="item.how_to_title" :text="item.how_to_text" :image="item.how_to_image" />
            </div>
            <div class="c-how-to__list--left">
                <svg width="514" height="258" viewBox="0 0 514 258" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 243.66C76.1667 258.041 225.1 270.909 277.5 214.595C343 144.203 242.5 -7.93349 513 2.5117"
                        stroke="#F48E28" stroke-width="3" stroke-dasharray="5 8" />
                </svg>

            </div>
            <div class="c-how-to__list--right">
                <svg width="491" height="249" viewBox="0 0 491 249" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M490 237.438C381.694 260.802 222.893 238.478 188.939 201.493C128.822 136.01 251.918 2.00031 1.25468e-05 2"
                        stroke="#F48E28" stroke-width="3" stroke-dasharray="5 8" />
                </svg>



            </div>
        </div>
    </section>
</template>
<style lang="scss">
.c-how-to {
    text-align: center;
    margin-top: rem(135);

    &__tag {
        color: $primary-color;
        font-size: $regular-font-size ;

    }

    &__title {
        font-size: $big-font-size;
        font-weight: bold;
        margin-bottom: rem(51);

    }

    &__list {
        display: flex;
        justify-content: center;
        gap: rem(223);
        text-align: left;
        position: relative;

        &--left {
            position: absolute;
            left: rem(110);
        }

        &--right {
            position: absolute;
            right: rem(160);
        }
    }
}
</style>