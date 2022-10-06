<template>
  <div class="backdrop" @click.self="$emit('close')">
    <div class="modal w-4/5 md:w-2/5">
        <h1 class="font-bold uppercase mb-3">{{currentSelected.title}}</h1>
        <p class="">{{currentSelected.description}}</p>

        <div class="mt-6">
            <h4 class="font-medium mb-2">Current Status</h4>
            <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                v-model="currentSelected.status"
              >
                <option>Todo</option>
                <option>Doing</option>
                <option>Done</option>
              </select>
        </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/tasks";
import { storeToRefs } from "pinia";

const store = useCounterStore();

const { currentSelected } = storeToRefs(store);

</script>

<style lang="scss" scoped>
.modal {
  padding: 40px;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
</style>
