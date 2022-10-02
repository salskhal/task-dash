import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("task", () => {
  const task = ref([
    {
      id: 1,
      title: "Wash Car",
      description:
        "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
      status: "todo",
    },
    {
      id: 2,
      title: "mamamia",
      description:
        "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
      status: "doing",
    },
    {
      id: 3,
      title: "namaste",
      description:
        "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
      status: "doing",
    },
    {
      id: 4,
      title: "kanakazana",
      description:
        "i just want to be alone with my feelings and not do jack shit for a while",
      status: "done",
    },
  ]);

  //   const doubleCount = computed(() => count.value * 2);
  const todos = computed(() => {
    return task.value.filter((todo) => todo.status == "todo");
  });
  const done = computed(() => {
    return task.value.filter((todo) => todo.status == "done");
  });
  const doing = computed(() => {
    return task.value.filter((todo) => todo.status == "doing");
  });

  const addTodo = (todo) => {
    task.value.push(todo);
  };

  if(localStorage.getItem("task")){
    task.value = JSON.parse(localStorage.getItem("task"))
  }

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
