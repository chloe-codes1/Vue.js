<template>
  <div>
      <TodoInput @create="createTodo"/>
      <TodoList :todos="todos" @checked="updateTodo"/>
      
  </div>
</template>

<script>
// src를 기준으로 절대 경로 설정: @
import TodoInput from '@/components/TodoInput' // .vue 생략 가능
import TodoList from '@/components/TodoList.vue'

export default {
    name: 'TodoView',
    components: {
        TodoList,
        TodoInput
    },
    data(){
        return {
            todos: [
                {id: 1, content: 'Django 복습', isCompleted: false},
                {id: 2, content: 'JavaScript 복습', isCompleted: true},
                {id: 3, content: 'Vue CLI 학습', isCompleted: false},
            ],
        }
    },
    methods:{
        updateTodo(todo){
            todo.isCompleted = !todo.isCompleted
        },
        createTodo(todo){
            this.todos.push(todo)
        }
    }
}
</script>

<style>

</style>