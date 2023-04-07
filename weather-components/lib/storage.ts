export class storage {
  static storageHandler({ method, key, data }) {
    if (method === "setItem") {
      const dataInJsonFormat = JSON.stringify(data);
      localStorage.setItem(key, dataInJsonFormat);
    }
    const storageValue = JSON.parse(localStorage.getItem(key));
    return storageValue || [];
  }
}
