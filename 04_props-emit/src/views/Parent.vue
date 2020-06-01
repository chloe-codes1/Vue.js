<template>
  <div class="parent">
      <h2>Parent Component</h2>
      <!-- 1. prop 이름="내용" -->
      <Child @hungry="onHungrySignal" :propFromParent="parentMsg" />
      <!-- 자식이 $emit 한 custom event 가 hungry임  -->
  </div>
</template>

<script>
// 1. import
import Child from '../components/Child.vue'

export default {
    name: 'Parent',
    data(){
        return {
            parentMsg: 'Message from parent',
        }
    },
    // 2. 등록
    components: {
        Child, // Child: Child 를 간소화 한 것임!
    },
    methods: {
        onHungrySignal(menu1, menu2){
            console.log(menu1, menu2)
        }
    }
}
</script>

<style>

</style>