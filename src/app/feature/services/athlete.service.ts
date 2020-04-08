import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  athleteData = {};
  athleteList = [];
  constructor() { }

  setAthlete(data) {
    this.athleteData = data;
  }


  getAthlete() {
    return this.athleteData;
  }

  setAthleteList(athleteList: any) {
    this.athleteList = athleteList;
  }
  getAthleteList() {
    return this.athleteList;
  }
}
