<template>
  <div>
   
    <input type="text" placeholder="firstName" v-model="firstName">
    <input type="text" placeholder="lastName" v-model="lastName">

    <p>
      全称：
       {{fullName}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  },
  computed: {
    fullName: function() {
     return this.firstName + this.lastName;
    }
  },
  watch:{
    firstName:function(){
      console.log('aaa')
    }
  }
};
</script>

<style>
</style>
