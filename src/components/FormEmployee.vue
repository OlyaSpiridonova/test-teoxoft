<template>
    <BaseButton v-if="!state.isOpenForm" @click="openModal">Register a new employee</BaseButton>
    <BaseDialog
      :show="state.isOpenForm"
      title="Registering and editing employee data"
      @close="handleClose"
      >
        <form class="form" @submit.prevent="handleSubmit ">
            <template v-for="input in newEmployee" :key="input">
                <label :for="input.placeholder" class="form__label">
                    <span>{{ `Your ${input.placeholder}` }}</span>
                    <input
                        :type="input.type"
                        v-model="input.model"
                        :placeholder="input.placeholder"
                        :id="input.placeholder"
                        :min="input.min"
                        :max="input.max"
                        :class="{form__input: input, form__input_error: input.error}"
                    />
                    <span v-if="input.error" class="form__error">{{ input.error }}</span>
                </label>
            </template>
            <BaseButton v-if="state.editableEmployee" @click="handleSubmit">Save change</BaseButton>
            <BaseButton v-else>Add a new employee</BaseButton>
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

const newEmployee = ref({
  firstname: { model: '', type: 'text', placeholder: 'Firstname' },
  lastname: { model: '', type: 'text', placeholder: 'Lastname' },
  experience: {
    model: '', type: 'number', placeholder: 'Experience', min: 1, max: 99,
  },
  age: {
    model: '', type: 'number', placeholder: 'Age', min: 1, max: 99,
  },
  address: { model: '', type: 'text', placeholder: 'Address' },
});

const editableEmployee = computed(() => state.editableEmployee);
watch(editableEmployee, () => {
  if (editableEmployee.value) {
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in newEmployee.value) {
      newEmployee.value[key].model = editableEmployee.value[0][key];
    }
  }
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
    newEmployee.value[key].error = '';
  }
}

function handleSubmit() {
  const request = {};
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in newEmployee.value) {
    newEmployee.value[key].error = '';
    if (newEmployee.value[key].model === '') {
      newEmployee.value[key].error = 'Необходимо заполнить';
      return;
    }
    request[key] = newEmployee.value[key].model;
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
        font-weight: 400;
    }
    &__input {
        border-radius: 10px;
        padding: 8px;
        border: 2px solid var(--primary-bg-color);
        &:focus,
        &:focus-visible {
            outline: 2px dashed rgb(0, 153, 255);
        }
        &_error {
          border: 2px solid red;
        }
    }
    &__error {
      color: red;
    }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>
