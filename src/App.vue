<template>
  <div>
    <main>
      <h1>📝 TODOリスト</h1>

      <!-- 入力フォーム -->
      <div>
        <input v-model="todoStore.newTodoTitle" type="text" placeholder="タスク名を入力" />
        <button @click="addTodo">追加</button>
      </div>

      <!-- TODOリスト -->
      <ul>
        <li v-for="todo in todoStore.todos" :key="todo.id">
          <label>
            <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo.id)" />
            <span :class="{ 'line-through': todo.done }">{{ todo.title }}</span>
          </label>
          <button @click="removeTodo(todo.id)">Delete</button>
        </li>
      </ul>

      <p v-if="todoStore.todos.length === 0">タスクはないです ✨</p>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/useTodoStore'

const todoStore = useTodoStore()

// 追加処理
const addTodo = () => {
  todoStore.addTodo()
}

// トグル処理
const toggleTodo = (id: number) => {
  todoStore.toggleTodo(id)
}

// 削除処理
const removeTodo = (id: number) => {
  todoStore.removeTodo(id)
}
</script>
