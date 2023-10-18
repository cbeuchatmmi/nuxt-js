<script setup>
import { computed } from 'vue'
import IconArrowLeft from '../icons/IconArrowLeft.vue';
import IconArrowRight from '../icons/IconArrowRight.vue';
import IconChevron from '../icons/IconChevron.vue';
import IconHealthy from '../icons/IconHealthy.vue';
import IconHorloge from '../icons/IconHorloge.vue';
import IconLocate from '../icons/IconLocate.vue';
import IconPhone from '../icons/IconPhone.vue';
import IconPlay from '../icons/IconPlay.vue';
import IconQuality from '../icons/IconQuality.vue';
import IconTruck from '../icons/IconTruck.vue';
import IconUber from '../icons/IconUber.vue';

const props = defineProps({
    name: String,
    bgcolor: String,
    size: String,

})

const getIcon = computed(() => {
    switch (props.name) {
        case 'arrowleft':
            return IconArrowLeft
        case 'arrowright':
            return IconArrowRight
        case 'chevron':
            return IconChevron
        case 'healthy':
            return IconHealthy
        case 'horloge':
            return IconHorloge
        case 'locate':
            return IconLocate
        case 'play':
            return IconPlay
        case 'phone':
            return IconPhone
        case 'quality':
            return IconQuality
        case 'truck':
            return IconTruck
        default:
            return IconUber
    }

})

const className = computed(() => ({
    ' -primary': props.bgcolor === 'primary',
    ' -secondary': props.bgcolor === 'secondary',
    ' -black': props.bgcolor === 'black',
    ' -white': props.bgcolor === 'white',
    '-large': props.size === 'large',
}))

</script>

<template>
    <i class="icon" :class="className">
        <component :is="getIcon" />
    </i>
</template>
<style lang='scss' scoped>
.icon {
    align-items: center;
    background-color: $white;
    color: black;
    border-radius: 100%;
    box-shadow: 0 0 5px 0 $gray;
    display: inline-flex;
    justify-content: center;
    height: rem(42);
    width: rem(42);

    &.-primary {
        background-color: $primary-color;
        box-shadow: none;
        color: white
    }

    &.-secondary {
        background-color: $secondary-color;
        box-shadow: none;
        color: $primary-color;
    }

    &.-black {
        background-color: $black;
        box-shadow: none;
        color: white
    }

    &.-white {
        color: $primary-color;
        box-shadow: none;
    }

    &.-large {
        align-items: center;
        display: inline-flex;
        justify-content: center;
        height: rem(88);
        width: rem(88);
    }
}
</style>