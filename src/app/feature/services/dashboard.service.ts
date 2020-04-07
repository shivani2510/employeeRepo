import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { ATHLETE_URL } from '../../core/url.constants'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpService:HttpService) { }

  getAthletsList():Observable<any>{
    return new Observable((observe)=>{
      this.httpService.get(ATHLETE_URL).subscribe((response)=>{
        observe.next(response);
        observe.complete();
      },(reject)=>{
        observe.error(reject);
      })
    });
  }
}
