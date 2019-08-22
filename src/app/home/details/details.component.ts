import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TransactionService} from '../transaction.service';

@Component({
  selector: 'wallet-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent {
  walletForm: FormGroup = this.fb.group({
    amount: [null, [Validators.required, Validators.nullValidator]]
  });
  totalAmountError: boolean = false;

  constructor(private fb: FormBuilder,
              private transactionService: TransactionService) {}

  performTransaction(): void {
    if (this.walletForm.valid && this.walletForm.value.amount !== 0) {
      const value = Number(this.walletForm.value.amount.toFixed(2)); // Trim value to 2 decimal points
      if (this.transactionService.getTotalValue() + value >= 0) {
        this.totalAmountError = false;
        const transaction = {
          date: new Date(Date.now()).toString(),
          amount: this.walletForm.value.amount
        };
        this.transactionService.storeTransaction(transaction);
        this.walletForm.reset({amount: null});
      } else {
        this.totalAmountError = true;
      }
    }
  }
}
