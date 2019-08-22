import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalStorageService} from '../model/local-storage.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LocalStorageService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
