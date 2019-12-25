import axios, { AxiosInstance } from 'axios';
import fetch from 'isomorphic-unfetch';

import { LocalStorage } from '../../shared/storage';

export default class HTTPClient {
  private readonly domain: string = 'http://localhost:4000';
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.domain,
      timeout: 1000,
      headers: {
        'Content-type': 'application/json',
      }
    })
  }

  async get<T>(url: string): Promise<T> {
    const res = await fetch(this.domain + url);
    return await res.json();
  }

  async post<T>(url: string, data: {}): Promise<T> {
    const token = await new LocalStorage().getItem();
    return await this.axiosInstance.post(url, data, {
      headers: {
        'Authorization': token,
      }
    });
  }
}