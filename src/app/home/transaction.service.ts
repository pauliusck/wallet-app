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
    this.transactions.next(this.getTransactions());
  }

  getTransactions(): Transaction[] {
    const transactions: Transaction[] = this.localStorageService.getData(this.walletKey);
    this.getTotalAmount(transactions);
    return transactions;
  }

  getTotalAmount(transactions: Transaction[]) {
    if (transactions.length > 0) {
      this.totalAmount = transactions.reduce((acc, value) => acc + value.amount, 0);
    } else {
      this.totalAmount = 0;
    }
  }

  storeTransaction(transaction: Transaction): void {
    const transactions: Transaction[] = Object.assign([], this.transactions.value);
    transactions.push(transaction);
    this.transactions.next(transactions);
    this.localStorageService.storeData(this.walletKey, transactions);
    this.getTransactions();
  }

  clearTransactions(): void {
    this.localStorageService.removeData(this.walletKey);
    this.getTransactions();
    this.transactions.next([]);
  }

  getTotalValue(): number {
    return this.totalAmount;
  }
}
