<template>
  <main>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div class="bg-slate-100 px-4 py-8 flex flex-col gap-3 rounded-2xl">
        <div class="flex items-center justify-between">
          <p class="font-medium">To Do</p>
          <p class="text-green-600 px-3 py-1 rounded-md bg-green-200">
            {{ todos.length }}
          </p>
        </div>
        <div
          class="bg-white py-8 px-4 rounded-xl"
          v-for="tod in todos"
          :key="tod.id"
        >
          <h1 class="font-semibold text-lg mb-3 uppercase">{{ tod.title }}</h1>
          <p class="text-gray-400">{{ tod.description }}</p>
        </div>
      </div>
      <div class="bg-slate-100 px-4 py-8 flex flex-col gap-3 rounded-2xl">
        <div class="flex items-center justify-between">
          <p class="font-medium">Doing</p>
          <p class="text-green-600 px-3 py-1 rounded-md bg-green-200">
            {{ doing.length }}
          </p>
        </div>
        <div
          class="bg-white py-8 px-4 rounded-xl"
          v-for="tod in doing"
          :key="tod.id"
        >
          <h1 class="font-semibold text-lg mb-3 uppercase">{{ tod.title }}</h1>
          <p class="text-gray-400">{{ tod.description }}</p>
        </div>
      </div>
      <div class="bg-slate-100 px-4 py-8 flex flex-col gap-3 rounded-2xl">
        <div class="flex items-center justify-between">
          <p class="font-medium">Completed</p>
          <p class="text-green-600 px-3 py-1 rounded-md bg-green-200">
            {{ done.length }}
          </p>
        </div>
        <div
          class="bg-white py-8 px-4 rounded-xl"
          v-for="tod in done"
          :key="tod.id"
        >
          <h1 class="font-semibold text-lg mb-3 uppercase">{{ tod.title }}</h1>
          <p class="text-gray-400">{{ tod.description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";

import { useCounterStore } from "@/stores/tasks";

const store = useCounterStore();

const { task, todos, done, doing } = storeToRefs(store);
</script>
