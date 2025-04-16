<script setup lang="ts">
import TodoInput from '~/components/TodoInput.vue'
import TodoList from '~/components/TodoList.vue'
import { useTodos } from '~/composables/useTodos'

const { todos, addTodo, toggleTodo, removeTodo } = useTodos()
</script>

<template>
  <main class="max-w-xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">My TODO List</h1>
    <TodoInput @add="addTodo" />
    <TodoList :todos="todos" @toggle="toggleTodo" @remove="removeTodo" />
  </main>
</template>
