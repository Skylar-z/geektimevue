<template>
<div>
 <div>name:{{name}}</div>
  <input type="text" v-model="name">
  <cEvent @on-change="handleChange">

  </cEvent>
</div>
 

</template>

<script>
import cEvent from "./cEvent";

export default {
  data() {
    return {
      name: ""
    };
  },
  components:{
      cEvent
  },
  methods:{
      handleChange(val,callback){
          this.name = val;
            callback('zzz')
      }
  }
};
</script>

<style>
</style>
