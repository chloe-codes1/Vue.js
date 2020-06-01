<template>
  <div>
      <input type="text" v-model="newTodo" @keypress.enter="writeTodo"/>
      <button @click="writeTodo">Add Todo</button>
  </div>
</template>

<script>
export default {
  name: 'TodoIinput',
  data(){
    return {
      newTodo: '',

    }
  },
  methods : {
    writeTodo() {
      // TodoView로 data를 보내야 함
      
      // 내용이 있을 때에만 함수 실행
      if (this.newTodo) { 
                    // trim으로 공백 제거하기!
      this.$emit('create', {
        id: Date.now(),
        content: this.newTodo.trim(),
        isCompleted: false
      })
    }
    this.newTodo = ''
    }
  }
}
</script>

<style>


</style>