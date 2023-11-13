<template>
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
        <button type="submit" @click="handleSubmit" class="form__button">Save</button>
    </form>
</template>

<script setup>
import { ref, inject } from 'vue';
import store from '../store/index';

const { submitForm } = inject('store', store);

const regForm = ref(null);
const newEmployee = ref({
  firstname: { model: '', placeholder: 'firstname' },
  lastname: { model: '', placeholder: 'lastname' },
  experience: { model: '', placeholder: 'experience' },
  age: { model: '', placeholder: 'age' },
  address: { model: '', placeholder: 'address' },
});

function handleSubmit() {
  const request = {};
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in newEmployee.value) {
    request[key] = newEmployee.value[key].model;
  }
  submitForm('employees', request);
  regForm.value.reset();
}

</script>

<style lang="scss" scoped>
.form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    &__label {
        min-width: 35%;
        display: flex;
        gap: 8px;
        flex-direction: column;
        color: #1628c7;
        font-weight: 500;
    }
    &__input {
        border-radius: 10px;
        padding: 8px;
        border: 2px solid #349cef;
        &:focus,
        &:focus-visible {
            outline: 2px dashed rgb(0, 153, 255);
        }
    }
    &__button {
        cursor: pointer;
        padding: 10px;
        background: #349cef;
        color: #1628c7;
        font-weight: 500;
        border-radius: 10px;
    }
}
</style>
