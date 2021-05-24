export default class FetchApi {
  static request = async (path, options) => {
    const BASE_URL = 'https://courttaker.herokuapp.com';
    const response = await fetch(`${BASE_URL}${path}`, options);

    if (!response.ok) {
      switch (response.status) {
        default:
          throw new Error(`Error ${response.status}`);
      }
    }
    const totalCountResponse = await response.headers.get('X-Total-Count');
    const data = await response.json();
    return {
      totalCountResponse,
      data,
    };
  };

  static get = async (path) => {
    const result = await this.request(path, {
      headers: {
        'Content-Type': 'application/json; charset=utf8',
        'Authorization': "Bearer " + localStorage.getItem('token'),
      },
    });
    return result;
  };

  static post = (path, body) => this.request(path, {
    method: 'POST',
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
