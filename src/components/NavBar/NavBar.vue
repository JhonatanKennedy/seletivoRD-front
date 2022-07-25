<template>
  <div class="container">
    <nav class="nav-container">
      <!-- logo -->
      <div class="nav-logo">
        <img alt="logo" src="@/assets/logo-rd-station-default.svg" />
      </div>
      <!-- mobile button -->
      <button
        class="button-mobile"
        :class="{ isOpen: openMenu }"
        @click="openMenu = !openMenu"
      >
        <div class="dash" />
        <div class="dash" />
        <div class="dash" />
      </button>
      <!-- desktop menu -->
      <div class="buttons-desktop">
        <div class="buttons-desktop-list">
          <div class="list-item">Menu 1</div>
          <div class="list-item">Menu 2</div>
          <div class="list-item">Menu 3</div>
          <div class="list-item">Menu 4</div>
          <div class="list-item">Menu 5</div>
        </div>
        <div class="buttons-desktop-container">
          <Button text="BUTTON" class="desktop-button-1" />
          <Button :hasIcon="true" text="BUTTON" class="desktop-button-2" />
        </div>
      </div>
    </nav>
    <!-- dropdow options -->

    <div class="menu-mobile" :class="{ hide: !openMenu }" v-show="openMenu">
      <div class="menu-mobile-list">
        <div class="menu-items">
          <span>Menu 1</span>
        </div>
        <div class="menu-items">
          <span>Menu 2</span>
        </div>
        <div class="menu-items">
          <span>Menu 3</span>
        </div>
        <div class="menu-items">
          <span>Menu 4</span>
        </div>
        <div class="menu-items">
          <span>Menu 5</span>
        </div>
      </div>
      <div class="menu-mobile-buttons">
        <div class="menu-mobile-buttons-container">
          <Button text="BUTTON" class="button-1" />
          <Button :hasIcon="true" text="BUTTON" class="button-2" />
        </div>
      </div>
      <div class="menu-mobile-overlay" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";

export default {
  name: "NavBar",
  components: { Button },
  data() {
    return {
      openMenu: false,
    };
  },
  watch: {
    openMenu(newValue) {
      if (newValue) {
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft =
          window.pageXOffset || document.documentElement.scrollLeft;
        window.onscroll = () => {
          window.scrollTo(scrollLeft, scrollTop);
        };
      } else {
        window.onscroll = () => {};
      }
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
