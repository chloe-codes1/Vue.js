<template>
  <div>
    <input type="text" @keypress.enter="onInput" class="w-50"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(event){
      // Emit 1. Props 에게 custom event를 쏜다
      this.$emit('input-change', event.target.value) // 첫번째 인자 custom event 명, 두번째 인자부터 data
    }
  }
}
</script>

<style>

</style>