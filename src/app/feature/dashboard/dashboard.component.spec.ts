import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/core/http.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AthleteService } from '../services/athlete.service';
import { DashboardService } from '../services/dashboard.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule ],
      declarations: [ DashboardComponent ],
      providers: [HttpService,HttpClient, DashboardService, AthleteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
