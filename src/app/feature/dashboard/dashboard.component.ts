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

  athleteList = [];
  gridParams;
  context = this;
  gridOptions = {
    floatingFilter: true,
    context: this,
    sideBar: {
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
    },
    rowSelection: 'multiple'
  }
  columnConfig;
  selectionGridConfig;
  defaultColDef = {
    sortable: true, filter: true, enablePivot: true, resizable: true, suppressMenu: true,
    filterParams: {
      applyButton: false,
      resetButton: true,
    }, floatingFilterComponentParams: { suppressFilterButton: true },
  };

  selectionGridParams;
  selectionGridOptions = { context: this };
  athleteGridConfig;
  cartGridConfig;
  fieldList = [];

  constructor(private dashboardService: DashboardService, private router: Router,
    private athleteService: AthleteService) {
    this.columnConfig = this.getGridConfig('athlete');
    this.selectionGridConfig = this.getGridConfig('selection');

    this.fieldList = this.columnConfig.map((e) => {return {name:e.field,filterType:e.filter}});
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

  deleteRecord(params) {
    this.athleteList.splice(this.athleteList.findIndex((e) => e.id === params.data.id), 1);
    this.athleteService.setAthleteList(this.athleteList);

    params.node.setSelected(true);
    var selectedData = this.gridParams.getSelectedRows();
    var res = this.gridParams.updateRowData({ remove: selectedData });
    this.gridParams.redrawRows();
  }

  onGridReadySelectedRows(params) {
    this.selectionGridParams = params.api;
  }

  addToSelected() {
    let selectedRows = this.gridParams.getSelectedRows();
    this.selectionGridParams.updateRowData({ add: selectedRows });
    this.gridParams.deselectAll();
  }

  deleteRecordFromCart(params) {
    params.node.setSelected(true);
    var selectedData = this.selectionGridParams.getSelectedRows();
    var res = this.selectionGridParams.updateRowData({ remove: selectedData });
  }

  getGridConfig(grid) {
    let gridCol: any = [
      {
        field: 'name',
        headerName: 'Name',
        filter: 'agTextColumnFilter',
        checkboxSelection: true
      }, {
        field: 'age',
        headerName: 'Age',
        filter: 'agNumberColumnFilter'
      }, {
        field: 'email',
        headerName: 'Email',
        filter: 'agTextColumnFilter'
      }, {
        field: 'country',
        headerName: 'Country',
        filter: 'agSetColumnFilter',
        floatingFilterComponentParams: { suppressFilterButton: false }
      }, {
        field: 'year',
        headerName: 'Year',
        filter: 'agNumberColumnFilter'
      }, {
        field: 'date',
        headerName: 'Date',
        filter: 'agDateColumnFilter',
        floatingFilterComponentParams: { suppressFilterButton: false },
      }, {
        field: 'sport',
        headerName: 'Sport',
        filter: 'agSetColumnFilter',
        floatingFilterComponentParams: { suppressFilterButton: false },
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
      }]
    if (grid == 'athlete') {
      gridCol.push({
        field: '',
        headerName: 'Action',
        pinned: 'right',
        filter: false,
        sortable: false,
        width: 95,
        suppressMenu: true,
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
      });
      return gridCol;
    } else {
      gridCol.push({
        field: '',
        headerName: 'Action',
        pinned: 'right',
        filter: false,
        sortable: false,
        width: 95,
        suppressMenu: true,
        cellRenderer: function (params) {
          var eDiv = document.createElement('div');
          eDiv.innerHTML = `<span class="my-css-class"><button class="btn-simple dlt-cls">Delete</button></span>`;
          var eButton1 = eDiv.querySelectorAll('.dlt-cls')[0];

          eButton1.addEventListener('click', function () {
            params.context.deleteRecordFromCart(params);
          });

          return eDiv;
        }
      });
      gridCol[0].checkboxSelection = false;
      return gridCol;
    }

  }

  onSearch(event) {
    var filterInstance = this.gridParams.getFilterInstance(event.field);
    if(event.filterType === 'agSetColumnFilter'){
      filterInstance.selectNothing();
      filterInstance.selectValue(event.value);
      filterInstance.applyModel();
    }else{
      filterInstance.setModel({
        type: 'contains',
        filter: event.value
      });
    }
    this.gridParams.onFilterChanged();
  }

  onClearAllFilter(event){
    this.gridParams.setFilterModel(null);
    this.gridParams.onFilterChanged();
  }

  onClearFieldFilter(event){
    var filterInstance = this.gridParams.getFilterInstance(event.field);
    if(event.filterType === 'agSetColumnFilter'){
      filterInstance.selectEverything();
      filterInstance.applyModel();
    }else{
      filterInstance.setModel(null);
    }
    this.gridParams.onFilterChanged();
  }

}
