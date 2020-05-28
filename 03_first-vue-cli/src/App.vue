<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home </router-link>
      <router-link to="/about">About </router-link>
      <router-link to="/contact">Contact </router-link>
      <router-link to="/ping">Ping </router-link>
    </div>
    <hr>
    <!-- 여기에 =/= block content -->
    <router-view />
    <!-- component rendering -->
    <hr>
  </div>
</template>

<script>
// [Component 사용하기]
// step 1: import 한다
// import HelloWorld from './components/HelloWorld.vue'
// import MyComponent from './components/MyComponent.vue'
// import GreatComponent from './components/GreatComponent.vue'

export default {
  name: 'App',
  // step 2: 등록한다
  components: {
    // HelloWorld,
    // MyComponent,
    // GreatComponent,
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
