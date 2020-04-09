import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAthleteComponent } from './manage-athlete.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AthleteService } from '../services/athlete.service';
import { DatePipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ManageAthleteComponent', () => {
  let component: ManageAthleteComponent;
  let fixture: ComponentFixture<ManageAthleteComponent>;
  let athleteService: AthleteService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ReactiveFormsModule, RouterTestingModule, MatSelectModule, MatFormFieldModule, MatInputModule],
      declarations: [ManageAthleteComponent],
      providers: [AthleteService, FormBuilder, DatePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    athleteService = TestBed.get(AthleteService);
    component.editMode = false;
    athleteService.setAthleteList([{
      "id": 1, "name": "Michael Phelps", "age": 19, "email": "abc@xyz.com",
      "country": "United States", "year": 2004, "date": "08/29/2004", "sport": "Swimming", "gold": 6,
      "silver": 0, "bronze": 2, "total": 8
    }, {
      "id": 2, "name": "Michael Phelps", "age": 27, "email": "abc@xyz.com", "country": "United States",
      "year": 2012, "date": "08/12/2012", "sport": "Swimming", "gold": 4, "silver": 2,
      "bronze": 0, "total": 6
    }]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set editmode to false if getathlete service do not have data', () => {
    component.ngOnInit();
    expect(component.athleteData).toEqual({});
    expect(component.editMode).toBeFalse();
  });

  it('should set editmode to true if getathlete service have data', () => {
    let data = { name: 'shivani', age: 26 };
    athleteService.setAthlete(data);
    component.ngOnInit();
    expect(component.editMode).toBeTruthy();
  });

  it('should validate form when empty', () => {
    expect(component.athleteForm.valid).toBeFalse();
  });

  it('should return error for name', () => {
    let name = component.athleteForm.controls['name'];
    expect(component.hasError('name', 'required')).toBeTrue();
    name.setValue("Shivani")
    expect(component.hasError('name', 'required')).toBeFalse();
  });


  it('should validate year', () => {
    let year = component.athleteForm.controls['year'];
    year.setValue("20188")
    expect(component.hasError('year', 'maxlength')).toBeTrue();
    year.setValue("202")
    expect(component.hasError('year', 'minlength')).toBeTrue();
    expect(component.hasError('year', 'required')).toBeFalse();
    year.setValue("2020")
    expect(component.hasError('year', 'maxlength')).toBeFalse();
    expect(component.hasError('year', 'minlength')).toBeFalse();

  });

  it('should submit form when valid for edit', () => {
    athleteService.setAthlete({
      "id": 1, "name": "Michael Phelps", "age": 19, "email": "abc@xyz.com",
      "country": "United States", "year": 2004, "date": "08/29/2004", "sport": "Swimming", "gold": 6,
      "silver": 0, "bronze": 2, "total": 8
    });
    component.ngOnInit();
    let name = component.athleteForm.controls['name'];
    name.setValue("Shivani")
    component.onSubmit();
    expect(component.athleteForm.valid).toBeTrue();
    // expect(component.athleteForm.value.id).toBe(3);
    expect(athleteService.getAthleteList().length).toBe(2);
    expect(athleteService.getAthleteList()[0].name).toBe("Shivani");
  });

  it('should submit form when valid for create', () => {
    
    component.athleteForm.controls['name'].setValue("Shivani");
    component.athleteForm.controls['age'].setValue(26);
    component.athleteForm.controls['email'].setValue("abc@xyz.com");
    component.athleteForm.controls['country'].setValue("India");
    component.athleteForm.controls['year'].setValue("2020");
    component.athleteForm.controls['date'].setValue("08/29/2004");
    component.athleteForm.controls['sport'].setValue("Karate");
    component.athleteForm.controls['gold'].setValue("4");
    component.athleteForm.controls['silver'].setValue("2");
    component.athleteForm.controls['bronze'].setValue("2");
    component.athleteForm.controls['language'].setValue("English");
    
    component.onSubmit();
    expect(component.athleteForm.valid).toBeTrue();
    expect(component.editMode).toBeFalse();
    expect(component.athleteForm.value.id).toBe(3);
    expect(athleteService.getAthleteList().length).toBe(3);
  });



});
