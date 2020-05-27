<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- step 3: 사용한다 -->
    <MyComponent />
    <GreatComponent/>
  </div>
</template>

<script>
// [Component 사용하기]
// step 1: import 한다
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/MyComponent.vue'
import GreatComponent from './components/GreatComponent.vue'

export default {
  name: 'App',
  // step 2: 등록한다
  components: {
    HelloWorld,
    MyComponent,
    GreatComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
