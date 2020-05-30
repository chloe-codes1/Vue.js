<template>
  <div id="app">
    <div id="nav">
      <!-- 이렇게 a tag 쓰면 page reload 됨 -->
      <!-- 
      <a href="/">Home</a> | 
      <a href="/about">About</a> 
      -->
      <br>

      <!-- 그래서 router-link 를 써야 함! page reload 되면 우리가 vue를 쓸 이유가 없음! -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/ping">Ping</router-link>
    </div>

    <!-- 여기에 =/= block content -->
    <router-view/>
    <!-- component rendering -->
  </div>
</template>

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
