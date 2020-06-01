<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 3. 사용 -->
    <HelloWorld message="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src

// 1. import
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // 2. 등록
  components: {
    HelloWorld
  }
}
</script>
