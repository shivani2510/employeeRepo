import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common-filter',
  templateUrl: './common-filter.component.html',
  styleUrls: ['./common-filter.component.css']
})
export class CommonFilterComponent implements OnInit {

  @Input() fieldList;
  selectedField;
  searchText;
  appliedFilterList = [];
  @Output() onSearch: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClearAllFilter: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClearFieldFilter: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.fieldList)
  }

  onSearchClick() {
    let filter = { field: this.selectedField.name,filterType:this.selectedField.filterType, value: this.searchText };
    let index = this.appliedFilterList.findIndex((e) => e.field === this.selectedField.name)
    if (index === -1) {
      this.appliedFilterList.push(filter);
    } else {
      this.appliedFilterList[index].value = this.searchText;
    }
    this.onSearch.emit(filter);
    this.searchText = "";
    this.selectedField = "";
  }
  onClearAllFilterClick() {
    this.appliedFilterList = [];
    this.onClearAllFilter.emit(true);
  }
  onClearFieldFilterClick(field) {
    this.appliedFilterList.splice(this.appliedFilterList.findIndex((e) => e.field ===field.field), 1)
    this.onClearFieldFilter.emit(field);
  }

}
