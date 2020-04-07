import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LANGUAGES, COUNTRIES, SPORTS } from '../constants/athlete'; 
import { AthleteService } from '../services/athlete.service';
@Component({
  selector: 'app-manage-athlete',
  templateUrl: './manage-athlete.component.html',
  styleUrls: ['./manage-athlete.component.css']
})
export class ManageAthleteComponent implements OnInit {

  athleteForm;
  languageList = LANGUAGES;
  countyList = COUNTRIES;
  sportsList = SPORTS;
  constructor(private formBuilder:FormBuilder, private athleteService:AthleteService) { }
  athleteData;
  editMode = false;
  ngOnInit(): void {
    this.athleteData = this.athleteService.getAthlete();
    if(this.athleteData){
      this.editMode = true;
    }else{
      this.athleteData = {};
    }
    this.athleteForm = this.formBuilder.group({
      name:[this.athleteData.name, Validators.required],
      age:[this.athleteData.age, [Validators.required,Validators.min(1)]],
      email:[this.athleteData.email,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      country:[this.athleteData.country, Validators.required],
      year:[this.athleteData.year, [Validators.required, Validators.minLength(4),Validators.maxLength(4)]],
      date:[this.athleteData.date, Validators.required],
      sport:[this.athleteData.sport, Validators.required],
      gold:[this.athleteData.gold, Validators.min(0)],
      silver:[this.athleteData.silver,Validators.min(0)],
      bronze:[this.athleteData.bronze,Validators.min(0)],
      language:[this.athleteData.language,Validators.required],
    });
  }

  hasError(controleName,error){
    return this.athleteForm.controls[controleName].hasError(error);
  }/* 
  get athleteName(){
    return this.athleteForm.get('athleteName');
  }
  get age(){
    return this.athleteForm.get('athleteName');
  } */

  onSubmit(){
    if(this.athleteForm.valid){
      alert("valid");
    }else{
      alert("not valid")
    }
  }

}
