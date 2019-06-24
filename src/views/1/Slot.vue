<template>
    <div>
        <cSlot v-slot="slotProps">
            {{slotProps.user.name}}
            
            这些是插槽内容
        </cSlot>
    </div>
</template>

<script>
import cSlot from "./cSlot";

export default {
    components:{
        cSlot
    },
    data(){
        return{
         name:"234"
        }
    }
}
</script>

<style>

</style>
