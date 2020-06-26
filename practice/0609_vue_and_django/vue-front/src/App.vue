<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/accounts/login">Login</router-link>
    </div>
    <router-view @submit-login-data="login"/>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  // 전달 받은 데이터를 보내줌 (장고 서버에) -> token 받아 로그인 상태 유지
  name: "App",
  methods: {
    login(loginData){
      axios.post('http://localhost:8000/rest-auth/login/', loginData)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }
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
