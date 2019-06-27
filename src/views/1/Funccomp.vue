<template>
  <div>
   
        <button @click="destroyClock = !destroyClock">
          {{ destroyClock ? "加载时钟" : "销毁时钟" }}
        </button>
        <cFuncComp v-if="!destroyClock" />
     
        <!-- <Functional :name="name" /> -->
        <TempVar
          :var1="`hello ${name}`"
          :var2="destroyClock ? 'hello vue' : 'hello world'"
        >
          <template v-slot="{ var1, var2 }">
            {{ var1 }}
            {{ var2 }}
          </template>
        </TempVar>
      
  </div>
</template>
<script>
import cFuncComp from "./cFuncComp";
// import Functional from "./Functional";
import TempVar from "./TempVar";
export default {
  components: {
    cFuncComp,
    // Functional,
    TempVar
  },
  data() {
    return {
      destroyClock: false,
      name: "vue"
    };
  }
};
</script>