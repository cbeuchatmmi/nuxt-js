<script setup>
import { useGlobalStore } from '@/stores/global'
const store = useGlobalStore()
const env = useRuntimeConfig()
const props = defineProps({
    title: Array,
    text: Array,
    buttons: Array,
})


const { data: recipes } = await useAsyncData('recipes', async () => {
    return $fetch(env.public.apiUrl + '/recipes')
})
</script>
<template>
    <section class="head">
        <div class="head__left">
            <MyButton class="head__left--button" content="Bike Delivery" h="h5" size="small" variant="rounded"
                color="secondary" icon="true" name="uber" />
            <div class="head__left--title">
                <PrismicRichText :field="title" />
            </div>
            <div class="head__left--text">
                <PrismicRichText :field="text" />
            </div>
            <!-- <div class="head__left--buttons">
                <div v-for="button in buttons">
                    <button v-if="button.button_type === 'default'" class="head__button -default"
                        :href="button.button_link.url">
                        {{ button.button_label }}
                    </button>
                    <MyButton class="head__button -video" :variant="button.button_type" :href="button.button_link.url">
                        {{ button.button_label }}
                    </MyButton>
                </div>
            </div> -->
            <div class="head__button">
                <div v-for="button in buttons">
                    <MyButton v-if="button.button_type === 'default'" class="head__button -default"
                        :href="button.button_link.url">
                        {{ button.button_label }}
                    </MyButton>
                </div>
                <div class="head__play">
                    <MyIcon name="play" size="large" @click="store.increment()" />
                    <MyTitle h="h4" content="Order Process" />
                </div>
            </div>
        </div>

        <div class="head__center">
            <svg width="383" height="239" viewBox="0 0 383 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 236.818C54.1672 228.932 163.401 197.592 175.002 135.318C189.502 57.4747 37.5 45 61.29 153.634C72.6749 205.621 198 204.5 220.5 173.5C256.5 123.899 255.5 58.9996 336 64.9997"
                    stroke="#E4E4E4" stroke-width="3" stroke-dasharray="12 12" />
                <path
                    d="M355.743 47.1766C361.692 48.7705 363.684 56.2062 359.33 60.5608L314.561 105.33C310.206 109.684 302.77 107.692 301.177 101.743L284.79 40.588C283.196 34.6394 288.639 29.1961 294.588 30.79L355.743 47.1766Z"
                    fill="#E4E4E4" />
            </svg>

        </div>

        <div class="head__right">
            <MyCardsFS />
        </div>
        <div class="head__grey">
        </div>
    </section>






    <!-- <div class="shortlist"> 
        <MyShortLists />
    </div>

    <div class="product">
        <MyParagraph class="product__paragraph" p="p1" content="Product" />
        <MyTitle class="product__title" h="h3" content="Most Popular Items" />
        <MyCards class="product__card" />
        <MyButton class="product__button" content="See More Product" h="p1" size="small" variant="rounded" color="primary"
            icon="true" name="chevron" />
    </div> -->
</template>
<style lang="scss">
.c-hero {
    &__title {
        font-size: 40px;
        font-weight: 700;
        line-height: 1.2;
        color: black;

        strong {
            color: orange;
        }
    }

    &__text {
        font-size: 18px;
        line-height: 1.1;
        color: black;
    }
}

.head {
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
    align-items: center;
    justify-content: center;
    margin-left: rem(40);
    position: relative;

    &__left {

        &--title {

            font-size: $giant-font-size;
            font-family: $primary-font-familly;
            font-weight: bold;
            margin-right: rem(80);

            strong {
                color: orange;
            }

        }

        &--button {
            margin-bottom: rem(72);
        }

        &--text {
            margin-top: rem(48);
            margin-bottom: rem(92);
            margin-right: rem(120);
        }
    }

    &__button {
        display: flex;
        gap: rem(55);
    }

    &__play {
        display: flex;
        gap: rem(25);
        align-items: center;
        justify-content: center;
    }

    &__grey {
        position: absolute;
        right: rem(80);
        background: linear-gradient(to bottom, #D9D9D9, #fff);
        border-radius: rem(40);
        height: rem(637);
        width: rem(345);
    }

    &__center {
        position: absolute;
        top: rem(200);
        left: rem(500);
    }

    &__right {
        z-index: 1;
        position: relative;
        margin-left: rem(40);

    }
}

.shortlist {
    margin-top: rem(103);
}

.product {
    text-align: center;
    margin-top: rem(135);

    &__paragraph {
        color: $primary-color;
    }

    &__title {
        margin-bottom: rem(50);
    }


}
</style>