<template>
  
    <nav class="flex items-center   justify-between">
      <h3 class="font-semibold text-2xl">Projects</h3>
      <button @click.self="$emit('open')" class=" p-3 bg-green-800  rounded-full text-white hover:bg-[green]">+Add Task</button>
    </nav>

</template>

<script setup>
import { useCounterStore } from '@/stores/tasks'

const store = useCounterStore()

</script>

<style lang="scss" scoped>
nav {
//   border-bottom: 1px solid lightgray;
  padding: 1rem 2rem;
 
  @media (max-width: 1024px) {
    padding-left: 5rem;
  }
}
</style>
