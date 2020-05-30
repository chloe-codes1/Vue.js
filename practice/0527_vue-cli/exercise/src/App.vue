<template>
  <div id="app">
    <button v-on:click="menu='Index'">Index</button>
    <button v-on:click="menu='Lotto'">Lotto</button>
    <button v-on:click="menu='Lunch'">Lunch</button>
    <div v-if="menu == 'Index'">
      <Index/>
    </div>
    <div v-else-if="menu == 'Lotto'">
      <Lotto/>
    </div>
    <div v-else>
      <Lunch/>
    </div>
  </div>
</template>
<script>

// [Vue에서 Component 사용하기]
// 1. import 하기
import Index from './components/Index.vue'
import Lotto from './components/Lotto.vue'
import Lunch from './components/Lunch.vue'
export default {
  name: 'App',
  // 2. 등록하기
  components: {
    Index,
    Lotto,
    Lunch,
  },
  data() {
    return {
      menu: 'Index',
    }
  }
}
</script>
<style >
#app {
  text-align: center;
}
</style>