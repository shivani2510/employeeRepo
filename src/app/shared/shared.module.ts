import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomMaterialModule } from './material.module';
import { AgGridModule } from 'ag-grid-angular';
import { CommonFilterComponent } from './common-filter/common-filter.component';


@NgModule({
  declarations: [CommonFilterComponent],
  imports: [
    FormsModule,
    CommonModule,
    CustomMaterialModule,
    AgGridModule.withComponents([])
  ],
  exports:[CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    AgGridModule,
    CommonFilterComponent
  ]
})
export class SharedModule { }
