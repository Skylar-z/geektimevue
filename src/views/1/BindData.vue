<template>
  <div>
    <!-- <cBindData @on-input-phone="handleinputphone"></cBindData> -->

    
    <cBindData v-model="phoneInfo" :zip-code.sync="zipCode"></cBindData>
    <cBindData
      :phone-info="phoneInfo"
      :zip-code="zipCode"
      @change="val =>(phoneInfo=val)"
      @update:zipCode="val =>(zipCode = val)"
    ></cBindData>

    <p>info{{phoneInfo}}:{{zipCode}}</p>
  </div>
</template>

<script>
import cBindData from "./cBindData";

export default {
  data() {
    return {
     phoneInfo:{
         phone:""
     },
     zipCode:""
    };
  },
  components: {
    cBindData
  },
  methods: {
  }
};
</script>

<style>
</style>
