import { Component } from '@angular/core';
import {TransactionService} from '../transaction.service';

@Component({
  selector: 'wallet-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public transactionService: TransactionService) {}

  clearWallet(): void {
    this.transactionService.clearTransactions();
  }
}
