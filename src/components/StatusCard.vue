<template>
  <div>
    <div>
      <p>Todo</p>
      <p>{{ status.length }}</p>
    </div>
    <div class="todo" v-for="tod in status" :key="tod.id">
      <h1>{{ tod.title }}</h1>
      <p>{{ tod.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  status: String,
});
</script>

<style></style>
