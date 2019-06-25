<template>
  <div>
    <input type="text" placeholder="手机号" :value="phoneInfo.phone" @input="handleInput">
    <input type="text" placeholder="邮箱" :value="zipCode" @input="handleInputZ">

    <small>
      <p>输入就同步 ~ @input</p>
      <p>把输入的信息传递给父组件 ~ this.$emit()</p>
    </small>
  </div>
</template>

<script>
export default {
      model: {
    jia
    prop: "phoneInfo", // 默认 value
    event: "change" // 默认 input
  },
 props:{
     phoneInfo: Object,
     zipCode:String
 },
  methods: {
      handleInput(e){
          this.$emit('change',{
        ...this.phoneInfo,
        phone: e.target.value
      })
      },
      handleInputZ(e){
          this.$emit('update:zipCode',e.target.value)
      }
  }
};
</script>

<style>
</style>
