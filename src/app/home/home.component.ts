import {Component} from '@angular/core';

@Component({
  selector: 'wallet-home',
  template: `
    <div class="container">
      <wallet-header></wallet-header>
      <wallet-details></wallet-details>
    </div>
  `
})
export class HomeComponent {
}
