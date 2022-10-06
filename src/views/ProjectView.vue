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
        <StatusCard :status="todos" @appear="show" />
      </div>
      <div class="bg-slate-100 px-4 py-8 flex flex-col gap-3 rounded-2xl">
        <div class="flex items-center justify-between">
          <p class="font-medium">Doing</p>
          <p class="text-green-600 px-3 py-1 rounded-md bg-green-200">
            {{ doing.length }}
          </p>
        </div>
        <StatusCard :status="doing" @appear="show" />
      </div>
      <div class="bg-slate-100 px-4 py-8 flex flex-col gap-3 rounded-2xl">
        <div class="flex items-center justify-between">
          <p class="font-medium">Completed</p>
          <p class="text-green-600 px-3 py-1 rounded-md bg-green-200">
            {{ done.length }}
          </p>
        </div>
        <StatusCard :status="done" @appear="show" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";

import { useCounterStore } from "@/stores/tasks";
import StatusCard from "../components/StatusCard.vue";

const emit = defineEmits(['makeappear'])


const show = () =>{
  emit("makeappear")
}

const store = useCounterStore();

const { task, todos, done, doing } = storeToRefs(store);
</script>
