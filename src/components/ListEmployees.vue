<template>
    <table class="list">
        <caption class="list__title">
            List of employees: {{ employees.length }}
        </caption>
        <tr>
            <th >№</th>
            <th>Fistname</th>
            <th>Lastname</th>
            <th>Experience</th>
            <th>Age</th>
            <th>Address</th>
            </tr>
        <tr v-for="employee of employees" :key="employee.id">
            <th scope="row">{{ employee.id }}</th>
            <td>{{ employee.firstname }}</td>
            <td>{{ employee.lastname }}</td>
            <td>{{ employee.experience }}</td>
            <td>{{ employee.age }}</td>
            <td>{{ employee.address }}</td>
        </tr>
    </table>
</template>

<script setup>
import { computed, inject, onMounted } from 'vue';
import store from '../store/index';

const { state, fetchData } = inject('store', store);

const employees = computed(() => state.employees);

onMounted(() => {
  fetchData('employees');
});

</script>
<style lang="scss" scoped>
.list {
    margin-top: 20px;
    border-collapse: collapse;
    width: 100%;

    &__title {
        color: #1628c7;
        font-weight: 700;
        margin-bottom: 20px;
    }
}

td, th {
    color: #1628c7;
    border: 1px solid #370dcf;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #4894d363;
}
</style>
