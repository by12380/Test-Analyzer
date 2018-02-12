import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from './../services/userService/user.service';
import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/formService/form.service';
import { PageService } from '../services/pageService/page.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-act-answer-sheet',
  templateUrl: './act-answer-sheet.component.html',
  styleUrls: ['./act-answer-sheet.component.css']
})
export class ActAnswerSheetComponent implements OnInit {

  readonly SHOW_BUBBLE_SHEET = 'Show Bubble Sheet';
  readonly HIDE_BUBBLE_SHEET = 'Hide Bubble Sheet';
  readonly SECTION_1 = "section1_";
  readonly SECTION_2 = "section2_";
  readonly SECTION_3 = "section3_";
  readonly SECTION_4 = "section4_";

  public isCollapsedEnglish = true;
  public englishCollapseStatus = this.SHOW_BUBBLE_SHEET;
  public isCollapsedMath = true;
  public mathCollapseStatus = this.SHOW_BUBBLE_SHEET;
  public isCollapsedReading = true;
  public readingCollapseStatus = this.SHOW_BUBBLE_SHEET;
  public isCollapsedScience = true;
  public scienceCollapseStatus = this.SHOW_BUBBLE_SHEET;
  public link;

  constructor(
      private userService: UserService,
      private formService: FormService, private pageService: PageService,
      private router: Router, private modalService: NgbModal,
      private db: AngularFireDatabase
  ) {
    if (this.pageService.getPageNumber() < 3) {
      this.router.navigateByUrl('/');
    } else {
      this.link = this.formService.actTestForm.link;
    }
   }

  ngOnInit() {
  }

  collapseEnglish(){
    this.isCollapsedEnglish = !this.isCollapsedEnglish;
    if (this.isCollapsedEnglish == true) {
      this.englishCollapseStatus = this.SHOW_BUBBLE_SHEET
    }
    else {
      this.englishCollapseStatus = this.HIDE_BUBBLE_SHEET;
    }
  }

  collapseMath(){
    this.isCollapsedMath = !this.isCollapsedMath;
    if (this.isCollapsedMath == true) {
      this.mathCollapseStatus = this.SHOW_BUBBLE_SHEET
    }
    else {
      this.mathCollapseStatus = this.HIDE_BUBBLE_SHEET;
    }
  }

  collapseReading(){
    this.isCollapsedReading = !this.isCollapsedReading;
    if (this.isCollapsedReading == true) {
      this.readingCollapseStatus = this.SHOW_BUBBLE_SHEET
    }
    else {
      this.readingCollapseStatus = this.HIDE_BUBBLE_SHEET;
    }
  }

  collapseScience(){
    this.isCollapsedScience = !this.isCollapsedScience;
    if (this.isCollapsedScience == true) {
      this.scienceCollapseStatus = this.SHOW_BUBBLE_SHEET
    }
    else {
      this.scienceCollapseStatus = this.HIDE_BUBBLE_SHEET;
    }
  }

  getEnglishOptions(n){
    if(n % 2 == 1){
      return ['A', 'B', 'C', 'D'];
    }else {
      return ['F', 'G', 'H', 'J'];
    }
  }

  getMathOptions(n){
    if(n % 2 == 1){
      return ['A', 'B', 'C', 'D', 'E'];
    }else {
      return ['F', 'G', 'H', 'J', 'K'];
    }
  }

  getReadingOptions(n){
    if(n % 2 == 1){
      return ['A', 'B', 'C', 'D'];
    }else {
      return ['F', 'G', 'H', 'J'];
    }
  }

  getScienceOptions(n){
    if(n % 2 == 1){
      return ['A', 'B', 'C', 'D'];
    }else {
      return ['F', 'G', 'H', 'J'];
    }
  }

  store(formValues, modal) {

    let actSection1AnswerKeys: string[] = [];
    let actSection2AnswerKeys: string[] = [];
    let actSection3AnswerKeys: string[] = [];
    let actSection4AnswerKeys: string[] = [];
    
    this.modalService.open(modal).result.then(
      result => {

        if (result == 'yes') {

          for (let i = 1; i <= 75; i++) {
            actSection1AnswerKeys.push(formValues["section1_" + i]);
          }

          this.formService.actSection1AnswerKeys = actSection1AnswerKeys;

          for (let i = 1; i <= 60; i++) {
            actSection2AnswerKeys.push(formValues["section2_" + i]);
          }

          this.formService.actSection2AnswerKeys = actSection2AnswerKeys;

          for (let i = 1; i <= 40; i++) {
            actSection3AnswerKeys.push(formValues["section3_" + i]);
          }

          this.formService.actSection3AnswerKeys = actSection3AnswerKeys;

          for (let i = 1; i <= 40; i++) {
            actSection4AnswerKeys.push(formValues["section4_" + i]);
          }

          this.formService.actSection4AnswerKeys = actSection4AnswerKeys;

          this.db.object("/users/" + this.userService.userId).update({
            act: {
              english: actSection1AnswerKeys,
              math: actSection2AnswerKeys,
              reading: actSection3AnswerKeys,
              science: actSection4AnswerKeys
            }
          })

          this.pageService.setPageNumber(4);
          this.router.navigateByUrl("/act-test-result");
        }

      },
      reason => {
      }
    )

  }

}
