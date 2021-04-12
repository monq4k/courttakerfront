export default class FetchApi {
  static request = async (path, options) => {
    const response = await fetch(path, options);

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

  static get = async (options) => {
    const result = await this.request(options, {
      headers: {
        'Content-Type': 'application/json; charset=utf8',
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
