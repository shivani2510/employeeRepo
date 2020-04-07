import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';
import { AthleteService } from '../services/athlete.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService, private router:Router, private athleteService:AthleteService) { }

  athleteList;
  gridParams;
  context = this;

  columnConfig = [
    {
      field: 'name',
      headerName: 'Name'
    }, {
      field: 'age',
      headerName: 'Age'
    }, {
      field: 'email',
      headerName: 'Email'
    }, {
      field: 'country',
      headerName: 'Country'
    }, {
      field: 'year',
      headerName: 'Year'
    }, {
      field: 'date',
      headerName: 'Date'
    }, {
      field: 'sport',
      headerName: 'Sport'
    }, {
      field: 'gold',
      headerName: 'Gold'
    }, {
      field: 'silver',
      headerName: 'Silver'
    }, {
      field: 'bronze',
      headerName: 'Bronze'
    }, {
      field: '',
      headerName: 'Total',
      cellRenderer: (params) => { return params.data.gold + params.data.silver + params.data.bronze }
    }, {
      field: '',
      headerName: 'Action',
      cellRenderer: function(params){
        var eDiv = document.createElement('div');
        eDiv.innerHTML = '<span class="my-css-class"><button class="btn-simple">Edit</button></span>';
        var eButton = eDiv.querySelectorAll('.btn-simple')[0];

        eButton.addEventListener('click', function () {
          params.context.editRecord(params.data);
        });

        return eDiv;
      }
    }

  ];
  defaultColDef = {};
  ngOnInit(): void {
    this.getAthletsList();
  }

  getAthletsList() {
    this.dashboardService.getAthletsList().subscribe((response) => {
      this.athleteList = response;
    }, (reject) => {

    })
  }

  onGridReady(params) {
    this.gridParams = params.api;
  }

  editRecord(data){
    this.athleteService.setAthlete(data);
    this.router.navigate(['manage']);
  }

}
