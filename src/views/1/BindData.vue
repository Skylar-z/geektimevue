<template>
  <div>
    <!-- <cBindData @on-input-phone="handleinputphone"></cBindData> -->
    <input type="text" v-model="zzz">
    <input type="text" value="123" id="input1" >
    
    <cBindData v-model="phoneInfo" :zip-code.sync="zipCode" :checked="checked" @change="val=>(choose = val)"></cBindData>

    <cBindData v-model="checked"></cBindData>
   
    <cBindData
      :phone-info="phoneInfo"
      :zip-code="zipCode"
      @change="val =>(phoneInfo=val)"
      @update:zipCode="val =>(zipCode = val)"
      :checked = "checked"
      @changecheck="val => (choose = val)"
    ></cBindData>

    <p>info{{phoneInfo}}:{{zipCode}}
    </p>
    <p>是否选择{{choose}}</p>

     <small>
      <p>输入就同步 ~ @input</p>
      <p>把输入的信息传递给父组件 ~ this.$emit()</p>
    </small>

    <a href="./index.vue">djkafkng</a>

    <small>
        <p>不明白model是干嘛的</p>
        <p>不明白为什么是对象就要...</p>
    </small>

  </div>
</template>

<script>
import cBindData from "./cBindData";

export default {
  data() {
    return {
     zzz:"v-model法",
     phoneInfo:{
         phone:""
     },
     zipCode:"",
     checked:false,
     choose:false
    };
  },
  components: {
    cBindData
  },
  mounted(){
    this.getInput()
  },
  methods: {
    getInput(){
     var input1 =  document.getElementById("input1");
      input1.value="zzz"

     input1.addEventListener('change',function(){
     console.log("value="+input1.value)
     })

    //所以说 v-model的作用就相当于 bindvalue + change事件，把新值赋予旧值
    
    }
  }
};
</script>

<style>
</style>
