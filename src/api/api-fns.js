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

export function newsApi() {
  return axios.get(endpoints.news.getAll);
}

export async function getNews(page = 1, size = 10) {
  let t0 = new Date();
  let response = await fetch(
    `${endpoints.news.getNews}?page=${page}&size=${size}`,
  );
  let t1 = new Date();
  let json = await response.json();
  let t2 = new Date();
  console.log(`getNews: Response: ${t1 - t0} ms`);
  console.log(`getNews: Parse JSON: ${t2 - t1} ms`);
  console.log(`getNews: Total: ${t2 - t0} ms`);
  return json;
}

export async function getEvents(page = 1, size = 10) {
  let t0 = new Date();
  let response = await fetch(
    `${endpoints.news.getEvents}?page=${page}&size=${size}`,
  );
  let t1 = new Date();
  let json = await response.json();
  let t2 = new Date();
  console.log(`getEvents: Response: ${t1 - t0} ms`);
  console.log(`getEvents: Parse JSON: ${t2 - t1} ms`);
  console.log(`getEvents: Total: ${t2 - t0} ms`);
  return json;
}
export async function getAdvertisement(page = 1, size = 10) {
  let t0 = new Date();
  let response = await fetch(
    `${endpoints.news.getAdvertisements}?page=${page}&size=${size}`,
  );
  let t1 = new Date();
  let json = await response.json();
  let t2 = new Date();
  console.log(`getAdvertisement: Response: ${t1 - t0} ms`);
  console.log(`getAdvertisement: Parse JSON: ${t2 - t1} ms`);
  console.log(`getAdvertisement: Total: ${t2 - t0} ms`);
  return json;
}
export async function getSlider() {
  let t0 = new Date();
  let response = await fetch(endpoints.news.getSliders);
  let t1 = new Date();
  let json = await response.json();
  let t2 = new Date();
  console.log(`getSlider: Response: ${t1 - t0} ms`);
  console.log(`getSlider: Parse JSON: ${t2 - t1} ms`);
  console.log(`getSlider: Total: ${t2 - t0} ms`);
  return json;
}

export function timeTableGetApi(searchedText, token) {
  return axios.post(
    endpoints.timetable.search,
    searchedText,
    token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : {},
  );
}

export function departmentsGetApi(searchedText) {
  return axios.get(
    `${endpoints.departments.searchByName}?search=${searchedText}`,
  );
}

export function getBuildingDorms() {
  return axios.get(endpoints.buildings.get);
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

export function getPersonalityByName(name = '', size = 1, page) {
  let endpoint = `${endpoints.personality.personalityUrl}?search=${name}&size=${size}`
  if (page) {
    endpoint = endpoint + `&page=${page}`
  }
  return axios.get(endpoint);
}

export function getPersonalityById(personId) {
  const endpoint = `${endpoints.personality.personalityUrl}/getByPersonId?personId=${personId}`
  return axios.get(endpoint);
}

export function getAllQuestionnaires(token) {
  return axios.get(endpoints.questionnaires.getAllQuestionnaires, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getQuestionnaire(id, token) {
  return axios.post(endpoints.questionnaires.getQuestionnaire, id.toString(), {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function saveAnswers(params, token) {
  return axios.post(endpoints.questionnaires.saveAnswers, params, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
}