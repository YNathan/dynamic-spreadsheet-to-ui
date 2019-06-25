import { Component, OnInit } from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
import * as Excel from '@grapecity/spread-excelio';
import '@grapecity/spread-sheets-charts';
import {saveAs} from 'file-saver';
import { SpeakerService } from '../speaker.service';

@Component({
  selector: 'app-excel-managment',
  templateUrl: './excel-managment.component.html',
  styleUrls: ['./excel-managment.component.css']
})
export class ExcelManagmentComponent implements OnInit {

  spreadsheetTablesNames= [];
  spreadsheetColumnsNames= [];
  constructor(private service: SpeakerService) {
  }

  updateTablesAndColumnsStructure

  updateTableStructure():void{
    let value = {
      tables: this.spreadsheetTablesNames,
      columns: this.spreadsheetColumnsNames
    };
    this.service.updateTablesAndColumnsStructure(value).subscribe(data => {

    });
  }
   ngOnInit() {
    this.service.getSpreadsheetTablesName().subscribe(data => {
      for(let table_name of data.tables_names){
        this.spreadsheetTablesNames.push({name: table_name, checked: true});
      }
    });
    this.service.getSpreadsheetColumnsName().subscribe(data => {
      for(let column_name of data.columns_names){
        this.spreadsheetColumnsNames.push({name: column_name, checked: true,type_kind: 'string'});
      }
    });
  }

  getViewTable(): void{
    this.service.getSpreadsheetTablesName().subscribe(data => {
      for(let table_name of data.tables_names){
        this.spreadsheetTablesNames.push({name: table_name, checked: true});
      }
    });
    this.service.getSpreadsheetColumnsName().subscribe(data => {
      for(let column_name of data.columns_names){
        this.spreadsheetColumnsNames.push({name: column_name, public_display: true,vip_display: true,type_kind: 'string'});
      }
    });
  }

}

