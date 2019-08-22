import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalStorageService} from '../model/local-storage.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderModule} from 'ngx-order-pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule
  ],
  providers: [
    LocalStorageService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    OrderModule
  ]
})
export class SharedModule { }
