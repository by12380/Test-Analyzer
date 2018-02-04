import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-act-answer-sheet',
  templateUrl: './act-answer-sheet.component.html',
  styleUrls: ['./act-answer-sheet.component.css']
})
export class ActAnswerSheetComponent implements OnInit {

  readonly SECTION_2 = "section2";
  readonly SECTION_4 = "section4";
  constructor() { }

  ngOnInit() {
  }

  getMathOptions(n){
    if(n % 2 == 1){
      return ['A', 'B', 'C', 'D', 'E'];
    }else {
      return ['F', 'G', 'H', 'J', 'K'];
    }
  }

}
