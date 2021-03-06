import { PhotinoData } from './PhotinoData';

function uuid() {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

export class PhotinoMessage {
  id: string;
  data: PhotinoData;

  constructor(data: PhotinoData) {
    this.id = uuid();
    this.data = data;
  }
}
