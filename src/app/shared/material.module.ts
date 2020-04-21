
import {NgModule} from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

@NgModule({
  imports: [
    
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule
    
  ],
  declarations: []
})

export class CustomMaterialModule {
}
