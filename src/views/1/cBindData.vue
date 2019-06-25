<template>
  <div>
    <input type="text" placeholder="手机号" :value="phoneInfo.phone" @input="handleInput">
    <input type="text" placeholder="邮箱" :value="zipCode" @input="handleInputZ">

    <p>
      <input type="checkbox" :checked="checked" @change="handleChange">
    </p>
  </div>
</template>

<script>
export default {
  model: {
    prop: "phoneInfo", // 默认 value
    event: "change" // 默认 input
  },
  props: {
    phoneInfo: Object,
    zipCode: String,
    checked: Boolean
  },
  methods: {
    handleInput(e) {
      this.$emit("change", {
        ...this.phoneInfo,
        phone: e.target.value
      });
    },
    handleInputZ(e) {
      this.$emit("update:zipCode", e.target.value);
    },
    handleChange(e) {
      console.log(e.target.checked);
      console.log(e.target.value);
      this.$emit("changecheck", e.target.checked);
    }
  }
};
</script>

<style>
</style>
