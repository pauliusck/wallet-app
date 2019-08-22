import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'wallet-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent {
  walletForm: FormGroup = this.fb.group({
    amount: [null, [Validators.required, Validators.nullValidator]]
  });

  constructor(private fb: FormBuilder) {}

  performTransaction(): void {
    // TODO: Implement performTransaction method
  }
}
