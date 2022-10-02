<template>
  <div class="app">
    <div v-if="showModal">
      <AddTask @close="toggleModal" />
    </div>
    <!-- Sidebar -->
    <Sidebar />
    <div class="main">
      <Navbar @open="toggleModal" />
      <router-view />
    </div>
    <!-- Content -->
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import AddTask from "./components/AddTask.vue";
import { ref } from "@vue/reactivity";
let showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<style lang="scss">
:root {
  --primary: lightgrey;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #64748b;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: white;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  .main {
    width: 100%;
  }

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 5rem;
    }
  }
}
</style>
