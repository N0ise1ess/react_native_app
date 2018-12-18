import axios from 'axios';

const endpoint = 'http://46.20.75.133:4002/uaa/oauth/token';

const endpointLibraryCard = 'http://46.20.75.133:4002/library/card';
const endpointLibraryBook = 'http://46.20.75.133:4002/library/book/me';
const endpointNewsAll = 'http://46.20.75.133:4002/integration/api/news/all';

export function loginApi(values) {

  let data = new FormData();

  data.append('username', values.username);
  data.append('password', values.password);
  data.append('grant_type', 'password');

  return axios.post(endpoint, data, {
    headers: {
      'Authorization': 'Basic bW9iaWxlOg==',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
};

export function libCardApi(token) {

  return axios.get(endpointLibraryCard, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export function libBookApi(token) {

  return axios.get(endpointLibraryBook, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

export function newsApi() {
  return axios.get(endpointNewsAll)
}
