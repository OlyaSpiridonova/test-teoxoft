<template>
    <router-link v-if="props.link" :to="props.to" :class="props.mode">
      <slot></slot>
    </router-link>
    <button v-else :class="mode">
      <slot></slot>
    </button>
  </template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: null,
  },
  link: {
    type: Boolean,
    required: false,
    default: false,
  },
  to: {
    type: String,
    required: false,
    default: '/',
  },
});
</script>

  <style scoped>
  button,
  a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary-bg-color);
    border: 1px solid var(--primary-bg-color);
    color: var(--primary-text-color);
    font-weight: 700;
    cursor: pointer;
    border-radius: 15px;
    margin-right: 0.5rem;
    display: inline-block;

    @media (max-width: 779px) {
      padding: 0.5rem;
    }
  }

  a:hover,
  a:active,
  button:hover,
  button:active {
    background-color: var(--secondary-bg-color);
    border-color: var(--secondary-bg-color);
  }

  .outline {
    background-color: transparent;
    border-color: var(--primary-bg-color);
    color: var(--primary-bg-color);
  }

  .icon {
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: transparent;
    border-color: var(--primary-bg-color);
    color: var(--primary-bg-color);
    border-radius: 5px;
    font-weight: 400;
  }
  .outline:hover,
  .outline:active,
  .icon:hover {
    color: #fff;
    background-color: var(--secondary-bg-color);
  }
  </style>
