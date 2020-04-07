import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  athleteData = {};
  constructor() { }

  setAthlete(data){
    this.athleteData = data;
  }

  
  getAthlete(){
   return this.athleteData;
  }
}
