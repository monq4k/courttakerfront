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
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZC"+
                          "I6NCwicGFzc3dvcmQiOiIkMmIkMTAkVUZxMnYycE4wTjBOeUJ5Tzc0UlVST05WbEk5eVpQaHlUUzkuQ0"+
                          "Q4c1RKaG10OVNBZi9uaS4iLCJlbWFpbCI6InJvbWFuLmhyeWJAbnVyZS51YSIsImZ1bGxOYW1lIjoiUm"+
                          "9tYW4gSHJ5YiIsImltYWdlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjpbXX0sImhvdXJzUGxheWVkIj"+
                          "owLCJpZFRlYW0iOm51bGx9XSwiaWF0IjoxNjIwODE1NzM3LCJleHAiOjE2MjA4MTkzMzd9.SzT4FBVmq"+
                          "iB3mbpUN7mQ6FS84kyQW0r1Vqqrd3Z5dck",
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
