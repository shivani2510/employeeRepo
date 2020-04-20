import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomMaterialModule } from './material.module';
import { AgGridModule } from 'ag-grid-angular';
import { CommonAgGridTemplateComponent } from './common-ag-grid-template/common-ag-grid-template.component';


@NgModule({
  declarations: [CommonAgGridTemplateComponent],
  imports: [
    AgGridModule.withComponents([])
  ],
  exports:[CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    AgGridModule,
    CommonAgGridTemplateComponent
  ]
})
export class SharedModule { }
