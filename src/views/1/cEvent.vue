<template>
  <div>
    <div @click="handleDivClick">
      <button @click="handleClick">重置成功</button>
      <button @click.stop="handleClick">重置失败</button>
    </div>


    <p>
        this.$emit的返回值是该子组件本身
    </p>
  </div>
</template>

<script>
export default {
    methods:{
        handleClick(){

        },
        handleDivClick(){
            const res = this.$emit('on-change',"",val=>{console.log(val)})
            console.log(res)
       }
    }
};
</script>

<style>
</style>
