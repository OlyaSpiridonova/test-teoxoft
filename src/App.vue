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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
* {
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;

  // fonts
  font-family: 'Roboto', sans-serif;

  // bg-color
  --primary-bg-color: #349cef;
  --secondary-bg-color: #68b4f1;

  // text-color
  --primary-text-color: #1628c7;
  --secondary-text-color: #3745be;
}

</style>
