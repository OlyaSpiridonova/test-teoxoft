<template>
    <BaseButton v-if="!state.isOpenForm" @click="openModal">Register a new employee</BaseButton>
    <BaseDialog :show="state.isOpenForm" title="Register new Employee" @close="handleClose">
        <form ref="regForm" class="form" @submit.prevent="">
            <template v-for="input in newEmployee" :key="input">
                <label :for="input.placeholder" class="form__label">
                    <span>{{ `Your ${input.placeholder}` }}</span>
                    <input
                        type="text"
                        v-model="input.model"
                        :placeholder="input.placeholder"
                        :id="input.placeholder"
                        class="form__input"
                    />
                </label>
            </template>
            <BaseButton
                v-if="state.editableEmployee"
                @click="handleSubmit"
                >
                Save changes
            </BaseButton>
            <BaseButton v-else @click="handleSubmit">Add a new employee</BaseButton>
        </form>
    </BaseDialog>
</template>

<script setup>
import {
  ref, inject, computed, watch,
} from 'vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseDialog from '@/components/UI/BaseDialog.vue';
import store from '../store/index';

const { state, submitForm, editEmployee } = inject('store', store);

const regForm = ref(null);
const newEmployee = ref({
  firstname: { model: '', placeholder: 'firstname' },
  lastname: { model: '', placeholder: 'lastname' },
  experience: { model: '', placeholder: 'experience' },
  age: { model: '', placeholder: 'age' },
  address: { model: '', placeholder: 'address' },
});

function openModal() {
  state.isOpenForm = true;
}
function handleClose() {
  state.isOpenForm = false;
  state.editableEmployee = null;
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in newEmployee.value) {
    newEmployee.value[key].model = '';
  }
}

const editableEmployee = computed(() => state.editableEmployee);
watch(editableEmployee, () => {
  if (editableEmployee.value) {
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in newEmployee.value) {
      newEmployee.value[key].model = editableEmployee.value[0][key];
    }
  }
});

function handleSubmit() {
  const request = {};
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in newEmployee.value) {
    request[key] = newEmployee.value[key].model;
    newEmployee.value[key].model = '';
  }
  if (editableEmployee.value) {
    const { id } = editableEmployee.value[0];
    editEmployee(id, request);
    state.editableEmployee = null;
  } else {
    submitForm('employees', request);
  }
  handleClose();
}

</script>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    &__label {
        min-width: 50%;
        display: flex;
        gap: 8px;
        flex-direction: column;
        color: var(--primary-text-color);
        font-weight: 500;
    }
    &__input {
        border-radius: 10px;
        padding: 8px;
        border: 2px solid var(--primary-bg-color);
        &:focus,
        &:focus-visible {
            outline: 2px dashed rgb(0, 153, 255);
        }
    }
}
</style>
