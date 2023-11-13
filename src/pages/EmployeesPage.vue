<template>
    <div class="page">
        <FormEmployee />
        <ListEmployees />
    </div>
</template>

<script setup>
import FormEmployee from '@/components/FormEmployee.vue';
import ListEmployees from '@/components/ListEmployees.vue';
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
}
</style>
