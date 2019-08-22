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

  trim2digits(n: number): number {
    return Number(n.toString().substring(0, n.toString().indexOf('.') + 3));
  }

  performTransaction(): void {
    this.totalAmountError = false;
    if (this.walletForm.valid && this.walletForm.value.amount !== 0) {
      const value = this.trim2digits(this.walletForm.value.amount);
      if (this.trim2digits(this.transactionService.getTotalValue()) + value >= 0) {
        const transaction = {
          date: new Date(Date.now()).toString(),
          amount: value
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
