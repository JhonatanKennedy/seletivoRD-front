<template>
  <button class="button" @click="$emit('click')">
    <span>{{ text }}</span>
    <img src="@/assets/icons/arrowRight.png" v-if="hasIcon" />
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  props: {
    text: {
      type: String,
      default: "",
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
