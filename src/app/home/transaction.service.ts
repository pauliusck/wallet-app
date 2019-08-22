import {Injectable} from '@angular/core';
import {LocalStorageService} from '../model/local-storage.service';
import {Transaction} from '../model/transaction.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  walletKey = 'wallet-transactions';
  private transactions: BehaviorSubject<Transaction[]> = new BehaviorSubject([]);
  public readonly transactions$: Observable<Transaction[]> = this.transactions.asObservable();
  public totalAmount = 0;

  constructor(private localStorageService: LocalStorageService) {
  }

  storeTransaction(transaction: Transaction): void {
    const transactions: Transaction[] = Object.assign([], this.transactions.value);
    transactions.push(transaction);
    this.transactions.next(transactions);
    this.localStorageService.storeData(this.walletKey, transactions);
  }

  clearTransactions(): void {
    this.localStorageService.removeData(this.walletKey);
  }

  getTotalValue(): number {
    return this.totalAmount;
  }
}
