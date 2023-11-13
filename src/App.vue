<template>
  <HeaderApp />
  <router-view/>
</template>

<script setup>
import { provide } from 'vue';
import HeaderApp from './components/HeaderApp.vue';
import store from './store/index';

provide('store', store);
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
}
</style>
