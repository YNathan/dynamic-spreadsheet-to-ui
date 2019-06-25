import { Component, OnInit } from '@angular/core';
import { SpeakerService } from "../speaker.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {

  constructor(private service: SpeakerService) {
    this.getChosenColumns();
    this.getNextData(undefined,undefined);
  }

  ngOnInit() {
  }

  public authorized: boolean = false;

  data: any;
  dataList: any;
  primarySelected: any;
  chosenColumns = [];


  selections = [];

  getNextData(col, val) {

    let selectionsContains = function(selections,col){
      let isExist = false;
      for(let i in selections){
        if (Object.keys(selections[i])[0] === col.key) {
          isExist = true;
          break;
        }
      }
      return isExist;
    };

    if (col !== undefined && val !== undefined) {
      let slct = {};
      slct[col] = val;
      let existAtIndex = -1;
      for (let i in this.selections) {
        if (Object.keys(this.selections[i])[0] === col) {
          existAtIndex = parseInt(i);
          break;
        }
      }
      if (existAtIndex > -1) {
        this.selections[existAtIndex][col] = val;
        this.selections.splice((existAtIndex + 1),this.selections.length);
        // Remove at key
        for(let iCC in this.chosenColumns){
          if(!selectionsContains(this.selections,this.chosenColumns[iCC])){
            this.chosenColumns[iCC].options = [];
          }
        }
      } else {
        this.selections.push(slct);
      }
    }

    var value = {
      selections: this.selections,
      chosenColumns: this.chosenColumns,
      currentCol: col
    };

    this.service.getNextData(value).subscribe(data => {
      // When Result Delete unused Property
      if(Object.keys(data.data[0]).length > this.chosenColumns.length){
        this.data = data.data;
        for(let row of this.chosenColumns){
          delete this.data[0][row.key];
        }
        delete this.data[0]['id'];
        this.dataList = Object.getOwnPropertyNames(this.data[0]);
      }
      for(let i in this.chosenColumns){
        if(this.chosenColumns[i].key === Object.keys(data.data[0])[0]){
          this.chosenColumns[i].option = [];
          for(let opt of data.data){
             this.chosenColumns[i].option.push(opt[this.chosenColumns[i].key]);
          }
        }
      }
    });
  }
  
  getChosenColumns() {
    this.service.getChosenColumns().subscribe(data => {
      for (let dt of data.data) {
        let col = {
          key: dt.name,
          option: [],
          value: ""
        }
        this.chosenColumns.push(col);
      }
    });
  }
}
