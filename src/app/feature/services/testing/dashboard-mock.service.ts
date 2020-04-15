import { DashboardService } from '../dashboard.service';
import { Injectable } from '@angular/core';
import { getAthleteList } from './data';
import { defer, Observable } from 'rxjs';
@Injectable()
export class TestDashboardService extends DashboardService{
    athleteList = getAthleteList();
    result:Observable<any>;
    constructor() {
        super(null);
      }


      getAthletsList():Observable<any>{
          return this.result = defer(()=>Promise.resolve(this.athleteList));
      }
}