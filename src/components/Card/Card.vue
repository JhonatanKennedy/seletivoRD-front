<template>
  <div class="card-container">
    <div class="card-container-icon">
      <img :src="require(`@/assets/icons/card/${iconType}.png`)" />
    </div>
    <div class="card-container-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="card-container-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    iconType: {
      type: String,
      default: "graph",
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
