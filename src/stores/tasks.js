import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("task", () => {
  const task = ref([]);

  //   const doubleCount = computed(() => count.value * 2);
  const todos = computed(() => {
    return task.value.filter((todo) => todo.status == "Todo");
  });
  const done = computed(() => {
    return task.value.filter((todo) => todo.status == "Done");
  });
  const doing = computed(() => {
    return task.value.filter((todo) => todo.status == "Doing");
  });

  const addTodo = (todo) => {
    task.value.push(todo);
  };

  if (localStorage.getItem("task")) {
    task.value = JSON.parse(localStorage.getItem("task"));
  }

  console.log(task.value);

  watch(
    task,
    (taskVal) => {
      localStorage.setItem("task", JSON.stringify(taskVal));
    },
    { deep: true }
  );
  //   function increment() {
  //     count.value++;
  //   }

  return { task, todos, done, doing, addTodo };
});
