<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <teleport to="body">
      <div v-if="props.show" @click="tryClose" class="backdrop"></div>
      <transition name="dialog">
        <dialog open v-if="props.show">
          <header>
            <slot name="header">
              <h2>{{ title }}</h2>
            </slot>
          </header>
          <section>
            <slot></slot>
          </section>
          <menu v-if="!props.fixed">
            <slot name="actions">
              <BaseButton @click="tryClose">Close</BaseButton>
            </slot>
          </menu>
        </dialog>
      </transition>
    </teleport>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  fixed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(['close']);

function tryClose() {
  if (props.fixed) return;
  emit('close');
}
</script>

  <style scoped>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgb(8 8 8 / 66%);;
    z-index: 10;
  }

  dialog {
    position: fixed;
    top: 20vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    border-radius: 12px;
    border: none;
    box-shadow: 0 2px 8px rgba(4, 39, 156, 0.664);
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: white;
  }

  header {
    background-color: var(--primary-bg-color);
    color: white;
    width: 100%;
    padding: 1rem;
  }

  header h2 {
    margin: 0;
  }

  section {
    padding: 1rem;
  }

  menu {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    margin: 0;
  }

  @media (min-width: 768px) {
    dialog {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }

  .dialog-enter-from,
  .dialog-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }

  .dialog-enter-active {
    transition: all 0.3s ease-in-out;
  }

  .dialog-leave-active {
    transition: all 0.3s ease-in;
  }

  .dialog-enter-to,
  .dialog-leave-from {
    opacity: 1;
    transform: scale(1);
  }
  </style>
