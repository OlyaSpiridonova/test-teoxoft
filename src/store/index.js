import { reactive } from 'vue';

const baseUrl = 'http://localhost:3000/';

const state = reactive({
  employees: [],
});

async function fetchData(url) {
  try {
    const request = await fetch(baseUrl + url);
    const response = await request.json();
    state.employees = response;
  } catch (error) {
    console.error(error);
  }
}

async function submitForm(url, objRequest) {
  try {
    await fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(objRequest),
    });
    fetchData('employees');
  } catch (error) {
    console.error(error);
  }
}

export default {
  state,
  fetchData,
  submitForm,
};
