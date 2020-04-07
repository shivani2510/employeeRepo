import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomMaterialModule } from './material.module';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [],
  imports: [
    AgGridModule.withComponents([])
  ],
  exports:[CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    AgGridModule
  ]
})
export class SharedModule { }
