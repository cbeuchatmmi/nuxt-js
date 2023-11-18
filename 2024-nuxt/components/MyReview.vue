<script setup>
var currentindex = 0;
const props = defineProps({
    items: Array,
    tag: String,
    title: String,
})
const methods = {
    nextItem() {
        currentindex = currentindex + 1;

    },
    prevItem() {
        currentindex = currentindex - 1;
    },
};
onMounted(() => {

    nextItem();
    prevItem();
})
</script>
<template>
    <div class="testimonials">
        <span class="testimonials__tag">{{ tag }}</span>
        <h3 class="testimonials__title">{{ title }}</h3>

        <div class="testimonials__content">
            <div class="review">
                <div class="review__content" v-for="(item, index) in items">
                    <div class="review__profil">
                        <MyProfil :nbrindex="currentindex" :index="index" :name="item.review_name"
                            :metier="item.review_metier" :image="item.review_image" :avis="item.review_avis" />
                    </div>
                </div>

                <div class="review__icon--left">
                    <MyIcon @click="prevItem" name="arrowleft" bgcolor="primary" size="small" />
                </div>
                <div class="review__icon--right">
                    <MyIcon @click="nextItem" name="arrowright" bgcolor="primary" size="small" />
                </div>
            </div>
            <img src="../assets/Fastfood.jpg" alt="image de nourriture de fastfood" class="testimonials__content--image">
        </div>

    </div>
</template>
<style lang="scss">
.testimonials {
    margin-left: rem(180);
    margin-right: rem(180);
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

    &__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: rem(67);

        align-items: center; // Centre les éléments verticalement

        &--image {}
    }
}



.review {
    position: relative;
    border-radius: rem(40);
    border: rem(1) solid $grey;
    box-shadow: 0 0 5px 0 $grey;
    height: rem(300);

    &__content {
        margin-left: rem(50);
        margin-right: rem(50);
        margin-top: rem(50);
    }

    &__avis {
        text-align: center;
        font-size: $regular-font-size ;

    }

    &__icon {
        &--left {
            position: absolute;
            top: 45%;
            left: rem(-25);
        }

        &--right {
            position: absolute;
            top: 45%;
            right: rem(-25);
        }
    }
}
</style>