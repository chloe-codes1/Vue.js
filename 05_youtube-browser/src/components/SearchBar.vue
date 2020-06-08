<template>
  <div class="search-bar">
    <input type="text" placeholder="Search"  @keypress.enter="onInput" class="pl-4"/>
    <button @click="onInput" class="search-btn btn d-md-inline d-lg-none d-xl-none"> 가즈아 </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(event){
      // Emit 1. Props 에게 custom event를 쏜다
      this.$emit('input-change', event.target.value) // 첫번째 인자 custom event 명, 두번째 인자부터 data
      event.target.value=''
    }
  }
}
</script>

<style>
div.search-bar{
  text-align : center;
}

div.search-bar > input {
  width: 60%;
}

div.search-bar > .search-btn{
  background-color: #3fb883;
  color: white;
  font-size: 0.8rem;
  padding: 5px, 8px;
  margin-left: 5px;
}
</style>