// src/stores/useTodoStore.ts
import { defineStore } from 'pinia'

interface Todo {
  id: number
  title: string
  done: boolean
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    nextId: 1,
    newTodoTitle: '',
  }),
  actions: {
    addTodo() {
      const title = this.newTodoTitle.trim()
      if (!title) return

      this.todos.push({
        id: this.nextId++,
        title,
        done: false,
      })
      this.newTodoTitle = '' // 入力フィールドをクリア
    },
    toggleTodo(id: number) {
      const todo = this.todos.find((t) => t.id === id)
      if (todo) todo.done = !todo.done
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((t) => t.id !== id)
    },
  },
})
