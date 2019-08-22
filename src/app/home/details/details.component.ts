import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TransactionService} from '../transaction.service';
import {Observable} from 'rxjs';
import {Transaction} from '../../model/transaction.model';

@Component({
  selector: 'wallet-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent {
  transactions$: Observable<Transaction[]> = this.transactionService.transactions$;
  walletForm: FormGroup = this.fb.group({
    amount: [null, Validators.required]
  });
  totalAmountError: boolean = false;

  constructor(private fb: FormBuilder,
              private transactionService: TransactionService) {
  }

  performTransaction(): void {
    this.totalAmountError = false;
    if (this.walletForm.valid && this.walletForm.value.amount !== 0) {
      const value = Number(this.walletForm.value.amount.toFixed(2)); // Trim value to 2 decimal points
      if (this.transactionService.getTotalValue() + value >= 0) {
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

  get f() {
    return this.walletForm.controls;
  }
}
