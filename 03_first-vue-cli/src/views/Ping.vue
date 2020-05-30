<template>
  <div>
      <h1>Ping</h1>
      <input type="text" @keyup.enter="sendToPong" v-model="inputText"/>

  </div>
</template>

<script>
export default {
    name: 'Ping',
    data() {
        return {
            inputText: '',
        }
    },
    methods: {
        sendToPong: function() {
            // $router
            // ver1)
            // this.$router.push(`pong?message=${this.inputText}`)
            // ver2)
            this.$router.push({ name: 'Pong', query: {message: this.inputText}})
        }
    }
}
</script>

<style>

</style>