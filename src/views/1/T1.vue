<template>
  <div>
    <input type="text" v-model="name" >

    <!-- <TChild :name="name" @handleChange="inputChange"></TChild> -->
  <!-- <TChild v-model="name"></TChild> -->
  <Tchild :name.sync="name"></Tchild>
  </div>
</template>

<script>
import TChild from "./Tchild";
export default {
  components: {
    TChild
  },
  data() {
    return {
      name: ""
    };
  },
  methods:{
      inputChange(value){
          this.name = value;
      }
  }
};
</script>

<style>
</style>
