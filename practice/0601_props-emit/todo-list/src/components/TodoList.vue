<template>
  <div>
      <h2>TodoList</h2>
      <ul class="todo-list">
          <!-- Todo 목록을 보여줄 예정 -->
          <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.isCompleted }">
              <input type="checkbox" :checked="todo.isCompleted" @click="$emit('checked', todo)">
                                                <!-- $emit('어떤 이벤트', 어떤 데이터) -->

              <!-- 
                <input type="checkbox" v-model="todo.isCompleted"/> 
              -->
                <!-- v-model 은 양방향 (vue는 양방향 가능하다)
                    : vue는 컴포넌트 간 양방향 가능하지만 단방향을 쓰는것을 권장! -->
              {{ todo.content}}
          </li>
      </ul>
  </div>
</template>

<script>

export default {
    name: 'TodoList',
    props: {
        todos: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>
    .completed {
        text-decoration: line-through;
    }
    .todo-list {
        list-style-type: none;
    }
</style>