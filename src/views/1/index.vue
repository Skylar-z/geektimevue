<template>
    <div>
        <ul v-for="(item,index) in list" :key="index">
           <li>{{item.label}}</li>
           <input type="checkbox" name="" id=""  />
        </ul>

        <button @click="change">change</button>
    </div>
</template>

<script>
export default {
data(){
    return{
         list:[{label:"item1"},{label:"item2"},{label:"item2"}]
    }
},
methods:{
    change(){
    this.list.unshift({label:"item0"})
}

}
}
</script>

<style>

</style>
