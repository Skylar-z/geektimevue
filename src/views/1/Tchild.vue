<template>
  <div>
      <input type="text" v-model="namef" @input="input">
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data(){
      return{
          namef:""
      }
  },
  methods:{
    //   inputChange(){
    //       this.$emit('handleChange',this.namef)
    //   }
     input(){
          this.$emit('input',this.namef)
      }
  },
  watch:{
      value:function(val){
          this.namef = val
      }
  }
};
</script>

<style>
</style>
