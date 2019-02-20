import axios from 'axios';
import { endpoints } from './endpoints';

export function loginApi(values) {
  let data = new FormData();

  data.append('username', values.username);
  data.append('password', values.password);
  data.append('grant_type', 'password');

  return axios.post(endpoints.auth.token, data, {
    headers: {
      Authorization: 'Basic bW9iaWxlOg==',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

export function libCardApi(token) {
  return axios.get(endpoints.library.card, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function libQRCodeApi(token) {
  return axios.get(endpoints.library.qr, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function libBookApi(token) {
  return axios.get(endpoints.library.books, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function financePaymentApi(token) {
  return axios.get(endpoints.finance.document, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function financeScholarshipsApi(token) {
  return axios.get(endpoints.finance.scholarships, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getDashboard() {
  return axios.get(endpoints.news.getAll);
}

export function getNews(page = 1, size = 10) {
  return axios.get(endpoints.news.getNews, {
    params: {
      page,
      size,
    },
  });
}

export function getEvents() {
  return axios.get(endpoints.news.getEvents);
}
export function getAdvertisement() {
  return axios.get(endpoints.news.getAdvertisements);
}
export function getSlider() {
  return axios.get(endpoints.news.getSliders);
}

export function timeTableGetApi(searchedText, token) {
  return axios.post(endpoints.timetable.search, searchedText, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'text/plain',
    },
  });
}

export function departmentsGetApi(searchedText) {
  return axios.get(`${endpoints.departments.searchByName}?search=${searchedText}`);
}

export function resetPassword(email) {
  let data = new FormData();

  data.append('email', email);

  return axios.post(endpoints.user.resetPassword, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export function editPhoneNumber(phoneNumber, token) {
  let data = new FormData();

  data.append('phoneNumber', phoneNumber);

  return axios.post(endpoints.user.editPhoneNumber, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
}
