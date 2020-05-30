<template>
  <div>
      <h1>Pong</h1>
      <h3>{{messageFromPing}}</h3>
  </div>
</template>

<script>
export default {
    name: 'Pong',
    data(){
        return {
            messageFromPing: this.$route.query.message
        }
    }
}
</script>

<style>

</style>