import axios from 'axios';

export default class HTTPClient {
  private domain: string = 'http://localhost:8080';

  async get<T>(url: string): Promise<T> {
    return await axios.get(this.domain + url);
  }

  async post<T>(url: string, data: {}): Promise<T> {
    return await axios.post(this.domain + url, data);
  }
}