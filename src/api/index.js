import axios from 'axios';

const endpoint = 'http://opencode.su/campus/uaa/oauth/token';

const endpointLibraryCard = 'http://opencode.su/campus/library/card';
const endpointQRCode = 'https://opencode.su/campus/library/card/qr';
const endpointLibraryBook = 'http://opencode.su/campus/library/book/me';
const endpointNewsAll = 'http://opencode.su/campus/integration/api/news/all';

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

export function libQRCodeApi(token) {
  return axios.get(endpointQRCode, {
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
