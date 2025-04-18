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
          <button @click="removeTodo(todo.id)">削除</button>
        </li>
      </ul>

      <p v-if="todoStore.todos.length === 0">タスクはないです ✨</p>
    </main>
  </div>
</template>

<script setup lang="ts">
import { createPinia, defineStore } from 'pinia'
import { ref } from 'vue'

// Pinia ストアの定義
const pinia = createPinia()

// ストア定義
const useTodoStore = defineStore('todo', {
  state: () => ({
    newTodoTitle: '', // 新しいタスクのタイトル
    todos: [] as { id: number, title: string, done: boolean }[], // タスクリスト
  }),
  actions: {
    addTodo() {
      if (this.newTodoTitle.trim()) {
        this.todos.push({
          id: Date.now(), // タスクID
          title: this.newTodoTitle,
          done: false,
        })
        this.newTodoTitle = '' // タスク追加後、入力欄をクリア
      }
    },
    toggleTodo(id: number) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) todo.done = !todo.done // 完了状態をトグル
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id) // タスクを削除
    }
  }
})

// Pinia ストアの使用
const todoStore = useTodoStore(pinia)

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

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>