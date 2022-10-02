<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <h1 class="text-xl font-bold">GR8</h1>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-symbols-outlined"> home </span>
        <span class="text">Overview</span>
      </router-link>
      <router-link to="/about" class="button">
        <!-- <span class="material-icons">description</span> -->
        <span class="material-symbols-outlined"> bar_chart </span>
        <span class="text">Stats</span>
      </router-link>
      <router-link to="/project" class="button">
        <span class="material-symbols-outlined"> folder_open </span>
        <!-- <span class="material-icons">group</span> -->
        <span class="text">Project</span>
      </router-link>
      <router-link to="/contact" class="button">
        <!-- <span class="material-icons">email</span> -->
        <span class="material-symbols-outlined"> sms </span>
        <span class="text">Chat</span>
      </router-link>
      <router-link to="/contact" class="button">
        <!-- <span class="material-icons">email</span> -->
        <span class="material-symbols-outlined"> calendar_month </span>
        <span class="text">Calender</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link to="/settings" class="button">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;

  // background-color: var(--dark);
  background-color: white;
  color: var(--light);

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;

  border-right: 1px solid lightgray;
  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;
    color: black;
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 2rem;
        // color: var(--light);
        color: black;
        transition: 0.2s ease-out;
      }
      .material-symbols-outlined {
        font-size: 2rem;
        // color: var(--dark-a);
        color: pink;
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
        .material-symbols-outlined {
          color: pink;
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .menu {
    margin: 0 -1rem;
    // display: flex;
    // flex-direction: column;
    // gap: 5px;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }
      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        // background-color: var(--dark-alt);

        .material-icons,
        .material-symbols-outlined,
        .text {
          color: black;
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid green;

        .material-icons,
        .material-symbols-outlined,
        .text {
          color: black;
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
      .material-symbols-outlined {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 1000;
  }
}
</style>
