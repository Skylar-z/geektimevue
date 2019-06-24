<template>
   <div>
       
        <p>
            这是子组件的内容
        </p>

        <slot :user=user></slot>
   
   </div>
</template>

<script>
export default {
    props:{
        name
    },
    data(){
        return{
            user:{
                name:"阿黄",
                age:'25'
            }
        }
    }
}
</script>

<style>

</style>
