import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/core/http.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AthleteService } from '../services/athlete.service';
import { DashboardService } from '../services/dashboard.service';
import { TestDashboardService } from '../services/testing/dashboard-mock.service';
import { getAthleteList } from '../services/testing/data';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardService:DashboardService;
  let athleteService:AthleteService;
  let router:Router;
  let dataList = getAthleteList();
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl','navigate']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ DashboardComponent ],
      providers: [HttpService,HttpClient,{provide: DashboardService, useClass:TestDashboardService},
         AthleteService,{provide:Router, useValue: routerSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dashboardService = TestBed.get(DashboardService);
    athleteService = TestBed.get(AthleteService);
    router = TestBed.get(Router);
    component.gridParams = {getSelectedRows:()=>{},updateRowData :(obj)=>{return true},redrawRows:()=>{}}
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get athlete list',fakeAsync(()=>{
      component.getAthletsList();
      tick();
      expect(component.athleteList.length).toBe(2);
      expect(component.athleteList).toEqual(dataList);
  }));

  it('should redirect to manage page on edit click',()=>{
    component.editRecord(dataList[0]);
    expect(athleteService.getAthlete()).toEqual(dataList[0]);
    expect(router.navigate).toHaveBeenCalledWith(['manage']);


  });

  it('should remove record when delete',()=>{
    component.athleteList = dataList;
    component.deleteRecord({data:dataList[0],node:{setSelected:()=>{}}});
    expect(component.athleteList.length).toBe(1);
    expect(component.athleteList[0].id).toBe(2);
    expect(athleteService.getAthleteList().length).toBe(1);
  })
});
