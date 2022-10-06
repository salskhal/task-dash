<template>
  <div
    class="bg-white py-8 px-4 rounded-xl cursor-pointer"
    v-for="(tod, index) in status"
    :key="index"
    @click="display(tod)"

  >
    <h1 class="font-semibold text-lg mb-3 uppercase">{{ tod.title }}</h1>
    <p class="text-gray-400">{{ tod.description }}</p>
  </div>


</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useCounterStore } from "@/stores/tasks"
import { storeToRefs } from "pinia";

const store = useCounterStore()

const { currentSelected } = storeToRefs(store)

const props = defineProps(["status"]);
const emit = defineEmits(['appear'])

const display = (tod) =>{
  currentSelected.value = tod
  emit('appear')
  console.log(currentSelected)
}
</script>

<style></style>
