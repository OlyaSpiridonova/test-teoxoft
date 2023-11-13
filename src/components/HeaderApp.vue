<template>
    <header class="header">
        <router-link to="/" class="header__logo">Logo</router-link>
    </header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: start;
    background: #349cef;
    padding: 20px;

    &__logo {
      font-size: 24px;
      font-weight: 700;
      color: #1628c7;
    }
}
</style>
