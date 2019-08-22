import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  storeData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }
}
