import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomMaterialModule } from './material.module';
import { AgGridModule } from 'ag-grid-angular';

import { CommonFilterComponent } from './common-filter/common-filter.component';
import { TextCellEditorComponent } from '../feature/dashboard/text-cell-editor.component';
import { NumberCellEditorComponent } from '../feature/dashboard/number-cell-editor.component';


@NgModule({
  declarations: [CommonFilterComponent,TextCellEditorComponent,NumberCellEditorComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    AgGridModule.withComponents([TextCellEditorComponent,NumberCellEditorComponent])
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
