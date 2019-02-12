import axios from 'axios';

const endpoint = 'http://opencode.su/campus/uaa/oauth/token';

const endpointLibraryCard = 'http://opencode.su/campus/library/card';
const endpointQRCode = 'http://opencode.su/campus/library/card/qr';
const endpointLibraryBook = 'http://opencode.su/campus/library/book/me';
const endpointNewsAll = 'http://opencode.su/campus/integration/api/news/all';
const endpointFinance = 'http://opencode.su/campus/integration/api/finance/document';
const endpointTimetableSearch = 'http://opencode.su/campus/integration/api/timetable/search';
const endpointDepartments = 'http://opencode.su/campus/integration/api/departments/searchByName';
const endpointEditPhoneNumber = 'http://opencode.su/campus/integration/api/users/edit/phoneNumber';
const endpointResetPassword = 'http://opencode.su/campus/integration/api/users/reset/password';

export function loginApi(values) {
  let data = new FormData();

  data.append('username', values.username);
  data.append('password', values.password);
  data.append('grant_type', 'password');

  return axios.post(endpoint, data, {
    headers: {
      Authorization: 'Basic bW9iaWxlOg==',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

export function libCardApi(token) {
  return axios.get(endpointLibraryCard, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export function libQRCodeApi(token) {
  return axios.get(endpointQRCode, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export function libBookApi(token) {
  return axios.get(endpointLibraryBook, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export function financePaymentApi(token) {
  return axios.get(endpointFinance, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export function newsApi() {
  return axios.get(endpointNewsAll);
}

export function timeTableGetApi(searchedText, token) {
  return axios.post(endpointTimetableSearch, searchedText, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'text/plain'
    }
  });
}

export function departmentsGetApi(searchedText) {
  return axios.get(`${endpointDepartments}?search=${searchedText}`);
}

export function resetPassword(email) {
  let data = new FormData();

  data.append('email', email);

  return axios.post(endpointResetPassword, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export function editPhoneNumber(phoneNumber, token) {
  let data = new FormData();

  data.append('phoneNumber', phoneNumber);

  return axios.post(endpointEditPhoneNumber, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
}
