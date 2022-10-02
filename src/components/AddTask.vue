<template>
  <div class="backdrop" @click.self="$emit('close')">
    <div class="modal">
      <h3 class="font-semibold text-xl mb-4">Add New Task</h3>
      <form class="flex flex-col gap-4">
        <div>
          <h3>Title</h3>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="John"
            required
          />
        </div>
        <div>
          <h3>Deescription</h3>

          <textarea
            class="focus:outline-none p-2.5 bg-gray-50"
            placeholder="Some Text...."
          ></textarea>
        </div>
        <div>
          <h3>Status</h3>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          >
            <option selected>Todo</option>
            <option>Doing</option>
            <option>Done</option>
          </select>
        </div>
        <button
          class="bg-green-800 w-full mt-3 rounded-full py-3 text-white font-medium text-lg"
          @click.prevent="addToTask"
        >
          Create Task
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/tasks";
import { ref } from "@vue/reactivity";
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])



const store = useCounterStore();

const todo = ref({
  id: Math.floor(Math.random() * 100),
  title: "algiers",
  description: "We will be travelling to algiers this month Insha'Allah",
  status: "todo",
});

const addToTask = () =>{
  store.addTodo(todo.value)
  emit('close')
}
</script>

<style scoped lang="scss">
.modal {
  width: 40%;
  padding: 60px 40px;
  background: white;
  border-radius: 10px;
  h1 {
    margin-bottom: 30px;
  }
  @media (max-width: 1024px) {
    width: 80vw;
  }
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
textarea {
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
}

input {
  width: 100%;
}
</style>
