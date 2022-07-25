<template>
  <div class="container" v-if="dialog" @click.self="close()">
    <div class="container-modal">
      <div class="container-modal-header">
        <div class="header-exit">
          <img src="@/assets/icons/x.png" @click="close()" />
        </div>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lGCesaaLi4s"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: this.isOpen,
    };
  },
  methods: {
    close() {
      this.dialog = false;
      this.$emit("handleClose");
    },
  },
  watch: {
    isOpen(newValue) {
      this.dialog = newValue;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
