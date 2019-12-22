export class LocalStorage {
  async setItem(value: string) {
    await localStorage.setItem('token', value);
  }

  async getItem() {
    return await localStorage.getItem('token');
  }
}