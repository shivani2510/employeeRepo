import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAthleteComponent } from './manage-athlete.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AthleteService } from '../services/athlete.service';
import { DatePipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ManageAthleteComponent', () => {
  let component: ManageAthleteComponent;
  let fixture: ComponentFixture<ManageAthleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ReactiveFormsModule, RouterTestingModule, MatSelectModule, MatFormFieldModule, MatInputModule ], 
      declarations: [ ManageAthleteComponent ],
      providers: [AthleteService, FormBuilder, DatePipe],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
