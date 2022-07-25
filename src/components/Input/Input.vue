<template>
  <div class="input-container">
    <input
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      type="text"
      :placeholder="placeholder"
      v-if="type === 'text'"
    />
    <input
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      type="email"
      :placeholder="placeholder"
      v-else-if="type === 'email'"
    />
    <input
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      type="text"
      :placeholder="placeholder"
      v-mask="['(##) ####-####', '(##) #####-####']"
      v-else-if="type === 'tel'"
    />
    <div class="password" v-else-if="type === 'password'">
      <input
        :value="value"
        @input="$emit('update:value', $event.target.value)"
        type="password"
        :placeholder="placeholder"
        v-if="!seePassword"
        minlength="6"
        maxlength="10"
        size="10"
        :class="{ error: error }"
      />
      <input
        :value="value"
        @input="$emit('update:value', $event.target.value)"
        type="text"
        :placeholder="placeholder"
        v-else
        minlength="6"
        maxlength="10"
        size="10"
        :class="{ error: error }"
      />
      <img
        src="@/assets/icons/eyeClose.png"
        v-if="!seePassword"
        @mousedown="togglePassword()"
      />
      <img
        src="@/assets/icons/eyeOpen.png"
        v-else
        @mouseup="togglePassword()"
      />
    </div>
    <div class="radio" v-else-if="type === 'radio'">
      <div
        class="radio-button"
        :class="{ unchecked: radioValue !== value }"
        @click="$emit('radio:input', radioValue)"
      >
        <div class="radio-button-check" />
      </div>
      <span class="radio-text">{{ textRadio }}</span>
    </div>
    <input
      :disabled="disable"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      type="url"
      :placeholder="placeholder"
      v-else-if="type === 'url'"
    />
    <select
      @input="$emit('select:input', $event.target.value)"
      :name="selectName"
      :id="selectName"
      v-else-if="type === 'select'"
    >
      <option value="" disabled selected>{{ placeholder }}</option>
      <option v-for="(item, key) in selectOptions" :value="item" :key="key">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: [String, Boolean],
    },
    placeholder: {
      type: String,
      default: "",
    },
    selectName: {
      type: String,
      default: "",
    },
    selectOptions: {
      type: Array,
      default: () => [],
    },
    textRadio: {
      type: String,
      default: "",
    },
    radioValue: {
      type: [String, Boolean, Number],
    },
    error: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      seePassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.seePassword = !this.seePassword;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
