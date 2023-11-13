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
    background: var(--primary-bg-color);
    padding: 20px;

    &__logo {
      font-size: 24px;
      font-weight: 700;
      color: var(--primary-text-color);
    }
}
</style>
