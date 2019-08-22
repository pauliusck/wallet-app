import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  storeData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
