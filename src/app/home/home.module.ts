import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {HeaderComponent} from './header/header.component';
import {TransactionService} from './transaction.service';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    TransactionService
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
