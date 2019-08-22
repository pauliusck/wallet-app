import {Injectable} from '@angular/core';
import {LocalStorageService} from '../model/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  walletKey = 'wallet-transactions';
  public totalAmount = 0;

  constructor(private localStorageService: LocalStorageService) {
  }

  clearTransactions(): void {
    this.localStorageService.removeData(this.walletKey);
  }

  getTotalValue(): number {
    return this.totalAmount;
  }
}
