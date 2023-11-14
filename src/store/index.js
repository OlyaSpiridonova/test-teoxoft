import { reactive } from 'vue';

const baseUrl = 'https://test-teoxft-server.vercel.app/';

const state = reactive({
  employees: [],
  isOpenForm: false,
  editableEmployee: null,
});

async function fetchData(url) {
  try {
    const request = await fetch(baseUrl + url);
    state.employees = await request.json();
  } catch (error) {
    console.error(error);
  }
}

async function submitForm(url, objRequest) {
  try {
    const response = await fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(objRequest),
    });
    if (!response) {
      throw new Error();
    }
    fetchData('employees');
  } catch (error) {
    console.error(error);
  }
}

async function editEmployee(id, obj) {
  try {
    const response = await fetch(`${baseUrl}employees/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ ...obj, id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response) {
      throw new Error();
    }
    fetchData('employees');
  } catch (error) {
    console.error(error);
  }
}

async function deleteEmployee(id) {
  try {
    const response = await fetch(`${baseUrl}employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response) {
      throw new Error();
    }
    fetchData('employees');
  } catch (error) {
    console.error(error);
  }
}

export default {
  state,
  fetchData,
  submitForm,
  editEmployee,
  deleteEmployee,
};
