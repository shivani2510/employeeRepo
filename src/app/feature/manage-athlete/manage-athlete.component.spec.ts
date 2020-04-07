import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAthleteComponent } from './manage-athlete.component';

describe('ManageAthleteComponent', () => {
  let component: ManageAthleteComponent;
  let fixture: ComponentFixture<ManageAthleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAthleteComponent ]
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
