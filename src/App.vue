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

  // bg-color
  --primary-bg-color: #349cef;
  --secondary-bg-color: #68b4f1;

  // text-color
  --primary-text-color: #1628c7;
  --secondary-text-color: #3745be;
}

</style>
