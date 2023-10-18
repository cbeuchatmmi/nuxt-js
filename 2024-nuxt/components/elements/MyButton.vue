<script setup>
import { computed } from "vue"
import MyIcon from "../elements/MyIcon.vue"
import MyTitle from "../elements/MyTitle.vue"
import MyParagraph from "../elements/MyParagraph.vue"

const props = defineProps({
  color: String,
  content: String,
  h: String,
  href: String,
  icon: Boolean,
  iconSize: String,
  name: String,
  size: String,
  variant: String,
})

/* J'ai corrigé cette partie après le cours avec une gestion des classes beaucoup plus simple. 
J'avais oublié qu'on pouvait mettre des objets dans le className */

const className = computed(() => ({
  ' -rounded': props.variant === 'rounded',
  ' -small': props.size === 'small',
  ' -secondary': props.color === 'secondary',
  ' -primary': props.color === 'primary',
}))
</script>
<template>
  <a v-if="href" :href="href" class="button" :class="className">
    <slot></slot>
  </a>
  <button v-else class="button" :class="className">
    <MyTitle :h="h" :content="content"></MyTitle>
    <MyParagraph :p="h" :content="content"></MyParagraph>

    <slot></slot>
    <MyIcon v-if="icon" :name='name' bgcolor="white" :size='iconSize' />

  </button>
</template>

<style lang="scss" scoped>
.button {
  align-items: center;
  background-color: $primary-color;
  background: linear-gradient(180deg, $secondary-color 0%, $primary-color 100%);
  border: none;
  border-radius: rem(15);
  box-shadow: 0px rem(4) rem(4) rgba(0, 0, 0, 0.25);
  color: $white;
  display: inline-flex;
  font-family: $primary-font-familly;
  font-size: $regular-font-size;
  gap: 10px;
  padding: rem(33) rem(67);
  text-decoration: none;
  word-wrap: break-word;


  &.-rounded {

    border-radius: rem(100);
    font-weight: 500;

  }

  &.-small {
    font-size: $small-font-size;
    padding: rem(14) rem(29);
    font-weight: 400;
  }

  &.-secondary {
    background: $secondary-color;
    color: $primary-color;
    font-weight: bold;
  }

  &.-primary {
    background: $primary-color;
    color: white;
  }

}
</style>
