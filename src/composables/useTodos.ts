import { ref } from 'vue'
import type { Todo } from '~/types/todo'

const todos = ref<Todo[]>([])
let nextId = 1

export const useTodos = () => {
  const addTodo = (title: string) => {
    todos.value.push({ id: nextId++, title, done: false })
  }

  const toggleTodo = (id: number) => {
    const todo = todos.value.find((t) => t.id === id)
    if (todo) {
      todo.done = !todo.done
    }
  }

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((t) => t.id !== id)
  }

  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  }
}
