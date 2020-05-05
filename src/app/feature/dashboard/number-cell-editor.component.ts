import {
    AfterViewInit,
    Component,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

import { ICellEditorAngularComp } from 'ag-grid-angular';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'editor-cell',
    template: `
    <div *ngIf="formGroup" [formGroup]="formGroup">
        <mat-form-field>
            <input matInput type="number" [formControlName]="key" [id]="key" placeholder="Enter {{columnName}}">
        </mat-form-field> 
    </div>
    `,
    styles: [
    ],
})
export class NumberCellEditorComponent implements ICellEditorAngularComp {

    columnName;
    key;
    value;
    formGroup: FormGroup;
    params;
    agInit(params: any): void {
        console.log(params);
        this.params = params;
        this.columnName = params.column.colDef.headerName;
        this.key = params.context.createKey(params.node.id, params.column);
        this.value = params.value;

        this.formGroup = params.context.formGroupCtrl;

        this.formGroup.controls[this.key].patchValue(this.value);
    }

    getValue(): any {
        // if(this.formGroup.controls[this.key].errors)

        return this.formGroup.controls[this.key].value;
    }

    refresh(params: any): boolean {
        this.formGroup = params.context.formGroupCtrl;

        this.formGroup.controls[this.key].patchValue(this.value);
        return true;
    }
}