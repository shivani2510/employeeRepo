import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { ManageAthleteComponent } from './feature/manage-athlete/manage-athlete.component';
import { NumberOnlyDirective } from './feature/directive/number-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageAthleteComponent,
    NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
