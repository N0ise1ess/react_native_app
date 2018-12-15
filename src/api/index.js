import axios from 'axios';

const endpoint = 'http://46.20.75.133:4002/uaa/oauth/token';

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
}
