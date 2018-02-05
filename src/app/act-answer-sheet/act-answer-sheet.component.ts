import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/formService/form.service';
import { PageService } from '../services/pageService/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-act-answer-sheet',
  templateUrl: './act-answer-sheet.component.html',
  styleUrls: ['./act-answer-sheet.component.css']
})
export class ActAnswerSheetComponent implements OnInit {

  readonly SECTION_2 = "section2_";
  readonly SECTION_4 = "section4_";
  link;

  constructor(private formService: FormService, private pageService: PageService, private router: Router) {
    if (this.pageService.getPageNumber() < 3) {
      this.router.navigateByUrl('/');
    } else {
      this.link = this.formService.actTestForm.link;
    }
   }

  ngOnInit() {
  }

  getMathOptions(n){
    if(n % 2 == 1){
      return ['A', 'B', 'C', 'D', 'E'];
    }else {
      return ['F', 'G', 'H', 'J', 'K'];
    }
  }

  getScienceOptions(n){
    if(n % 2 == 1){
      return ['A', 'B', 'C', 'D'];
    }else {
      return ['F', 'G', 'H', 'J'];
    }
  }

  store(formValues) {

    let actSection2AnswerKeys: string[] = [];
    let actSection4AnswerKeys: string[] = [];

    for (let i = 1; i <= 60; i++) {
      actSection2AnswerKeys.push(formValues["section2_" + i]);
    }

    this.formService.actSection2AnswerKeys = actSection2AnswerKeys;

    for (let i = 1; i <= 40; i++) {
      actSection4AnswerKeys.push(formValues["section4_" + i]);
    }

    this.formService.actSection4AnswerKeys = actSection4AnswerKeys;

    this.pageService.setPageNumber(4);
    this.router.navigateByUrl("/act-test-result");

  }

}
