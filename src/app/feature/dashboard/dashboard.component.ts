import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';
import { AthleteService } from '../services/athlete.service';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService, private router: Router, private athleteService: AthleteService) { }

  athleteList;
  gridParams;
  context = this;

  columnConfig = [
    {
      field: 'name',
      headerName: 'Name'
    }, {
      field: 'age',
      headerName: 'Age',
      filter: 'agNumberColumnFilter'
    }, {
      field: 'email',
      headerName: 'Email'
    }, {
      field: 'country',
      headerName: 'Country'
    }, {
      field: 'year',
      headerName: 'Year',
      filter: 'agNumberColumnFilter'
    }, {
      field: 'date',
      headerName: 'Date',
      filter: 'agDateColumnFilter'
    }, {
      field: 'sport',
      headerName: 'Sport'
    }, {
      field: 'gold',
      headerName: 'Gold',
      filter: 'agNumberColumnFilter'
    }, {
      field: 'silver',
      headerName: 'Silver',
      filter: 'agNumberColumnFilter'
    }, {
      field: 'bronze',
      headerName: 'Bronze',
      filter: 'agNumberColumnFilter'
    }, {
      field: '',
      headerName: 'Total',
      cellRenderer: (params) => { return params.data.gold + params.data.silver + params.data.bronze },
      filter: 'agNumberColumnFilter'
    }, {
      field: '',
      headerName: 'Action',
      pinned:'right',
      filter:false,
      sortable:false,
      width: 95,
      suppressMenu:true,
      cellRenderer: function (params) {
        var eDiv = document.createElement('div');
        eDiv.innerHTML = `<span class="my-css-class"><button class="btn-simple edit-cls">Edit</button></span>
        <span class="my-css-class"><button class="btn-simple dlt-cls">Delete</button></span>`;
        var eButton1 = eDiv.querySelectorAll('.edit-cls')[0];
        var eButton2 = eDiv.querySelectorAll('.dlt-cls')[0];

        eButton1.addEventListener('click', function () {
          params.context.editRecord(params.data);
        });
        eButton2.addEventListener('click', function () {
          params.context.deleteRecord(params);
        });

        return eDiv;
      }
    }

  ];
  defaultColDef = { sortable: true, filter: true, enablePivot: true, resizable:true };
  sidebarConfig = {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
      },
    ]
  }
  ngOnInit(): void {
    let data = this.athleteService.getAthleteList();
    if (data.length) {
      this.athleteList = data;
    } else {
      this.getAthletsList();
    }
  }

  getAthletsList() {
    this.dashboardService.getAthletsList().subscribe((response) => {
      this.athleteList = response;
      this.athleteService.setAthleteList(this.athleteList);
    }, (reject) => {

    })
  }

  onGridReady(params) {
    this.gridParams = params.api;
    // this.gridParams.sizeColumnsToFit();
  }

  editRecord(data) {
    this.athleteService.setAthlete(data);
    this.router.navigate(['manage']);
  }

  deleteRecord(params){
    this.athleteList.splice(this.athleteList.findIndex((e)=>e.id === params.data.id),1);
    this.athleteService.setAthleteList(this.athleteService.athleteList);

    params.node.setSelected(true);
    var selectedData = this.gridParams.getSelectedRows();
    var res = this.gridParams.updateRowData({ remove: selectedData });
    this.gridParams.redrawRows();
  }

}
