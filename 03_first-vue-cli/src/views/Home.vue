<template>
  <div class="home">
    <!-- 3. 사용 -->
    <MyComponent/>
    <input type="text"/>
  </div>
</template>

<script>
// @ is an alias to /src
// 1. import
import MyComponent from '@/components/MyComponent.vue'

export default {
  name: 'Home',
  components: {
    // 2. 등록
    MyComponent
  }
}
</script>
