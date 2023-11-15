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
            <th>Edit</th>
            </tr>
        <tr v-for="employee of employees" :key="employee.id">
            <th scope="row">{{ employee.id }}</th>
            <td>{{ employee.firstname }}</td>
            <td>{{ employee.lastname }}</td>
            <td>{{ employee.experience }}</td>
            <td>{{ employee.age }}</td>
            <td>{{ employee.address }}</td>
            <td class="icons">
                <BaseButton mode="icon" @click="handleEdit(employee.id)">
                    <img src="../assets/icons/edit.svg" alt="editBtn" class="edit"/>
                    Edit
                </BaseButton>
                <BaseButton mode="icon" @click="deleteEmployee(employee.id)">
                    <img src="../assets/icons/delete.svg" alt="deleteBtn" class="delete"/>
                    Delete
                </BaseButton>
            </td>
        </tr>
    </table>
</template>

<script setup>
import { computed, inject, onMounted } from 'vue';
import BaseButton from './UI/BaseButton.vue';
import store from '../store/index';

const { state, fetchData, deleteEmployee } = inject('store', store);

const employees = computed(() => state.employees);

function handleEdit(id) {
  state.editableEmployee = employees.value.filter((item) => item.id === id);
  state.isOpenForm = true;
}

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
        color: var(--primary-text-color);
        font-weight: 700;
        margin-bottom: 20px;
    }
}
.icons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.delete,
.edit {
    width: 25px;
}

td, th {
    text-align: center;
    color: var(--primary-text-color);
    padding: 8px;
    font-size: 14px;
}

tr:nth-child(even) {
    background-color: #4894d363;
}
</style>
