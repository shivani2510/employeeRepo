import { TestBed } from '@angular/core/testing';

import { AthleteService } from './athlete.service';

describe('AthleteService', () => {
  let service: AthleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the athlete object',()=>{
    let data  = {name:'shivani',age:26};
    service.setAthlete(data)
    expect(service.athleteData.name).toBe("shivani");
    expect(service.athleteData.age).toBe(26);
  });

  it('should return the athlete object set by setAthlete method',()=>{
    let data  = {name:'shivani',age:26};
    service.setAthlete(data)
    expect(service.getAthlete()).toBe(data);
  });

  
  it('should store the athlete array',()=>{
    let data  = [{name:'shivani',age:26},{name:'vibhuti',age:25}];
    service.setAthleteList(data)
    expect(service.athleteList[0].name).toBe("shivani");
    expect(service.athleteList[1].age).toBe(25);
  });

  it('should return the athlete array set by setAthleteList method',()=>{
    let data  = [{name:'shivani',age:26},{name:'vibhuti',age:25}];
    service.setAthleteList(data)
    expect(service.getAthleteList()).toEqual(data);
  });

});
