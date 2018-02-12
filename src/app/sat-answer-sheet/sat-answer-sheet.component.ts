import { UserService } from './../services/userService/user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { PageService } from './../services/pageService/page.service';
import { FormService } from './../services/formService/form.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sat-answer-sheet',
  templateUrl: './sat-answer-sheet.component.html',
  styleUrls: ['./sat-answer-sheet.component.css']
})
export class SatAnswerSheetComponent implements OnInit {

  readonly SHOW_BUBBLE_SHEET = 'Show Bubble Sheet';
  readonly HIDE_BUBBLE_SHEET = 'Hide Bubble Sheet';
  readonly SECTION_1 = "section1_";
  readonly SECTION_2 = "section2_";
  readonly SECTION_3 = "section3_";
  readonly SECTION_4 = "section4_";

  public isCollapsedSection1 = true;
  public section1CollapseStatus = this.SHOW_BUBBLE_SHEET;
  public isCollapsedSection2 = true;
  public section2CollapseStatus = this.SHOW_BUBBLE_SHEET;
  public isCollapsedSection3 = true;
  public section3CollapseStatus = this.SHOW_BUBBLE_SHEET;
  public isCollapsedSection4 = true;
  public section4CollapseStatus = this.SHOW_BUBBLE_SHEET;
  link: string;

  constructor(
      private userService: UserService,
      private formService: FormService, private pageService: PageService,
      private router: Router, private modalService: NgbModal,
      private db: AngularFireDatabase
  ){
    if (this.pageService.getPageNumber() < 3) {
      this.router.navigateByUrl('/');
    } else {
      this.link = this.formService.satTestForm.link;
    }
  }

  ngOnInit() {
  }

  collapseSection1(){
    this.isCollapsedSection1 = !this.isCollapsedSection1;
    if (this.isCollapsedSection1 == true) {
      this.section1CollapseStatus = this.SHOW_BUBBLE_SHEET
    }
    else {
      this.section1CollapseStatus = this.HIDE_BUBBLE_SHEET;
    }
  }

  collapseSection2(){
    this.isCollapsedSection2 = !this.isCollapsedSection2;
    if (this.isCollapsedSection2 == true) {
      this.section2CollapseStatus = this.SHOW_BUBBLE_SHEET
    }
    else {
      this.section2CollapseStatus = this.HIDE_BUBBLE_SHEET;
    }
  }

  collapseSection3(){
    this.isCollapsedSection3 = !this.isCollapsedSection3;
    if (this.isCollapsedSection3 == true) {
      this.section3CollapseStatus = this.SHOW_BUBBLE_SHEET
    }
    else {
      this.section3CollapseStatus = this.HIDE_BUBBLE_SHEET;
    }
  }

  collapseSection4(){
    this.isCollapsedSection4 = !this.isCollapsedSection4;
    if (this.isCollapsedSection4 == true) {
      this.section4CollapseStatus = this.SHOW_BUBBLE_SHEET
    }
    else {
      this.section4CollapseStatus = this.HIDE_BUBBLE_SHEET;
    }
  }

  store(formValues, modal){

    let satSection1AnswerKeys: string[] = [];
    let satSection2AnswerKeys: string[] = [];
    let satSection3AnswerKeys: string[] = [];
    let satSection4AnswerKeys: string[] = [];

    this.modalService.open(modal).result.then( result => {
      if (result == "yes") {

          for (let i = 1; i <= 52; i++) {
            satSection1AnswerKeys.push(formValues[this.SECTION_1 + i])
          }

          this.formService.satSection1AnswerKeys  = satSection1AnswerKeys;

          for (let i = 1; i <= 44; i++) {
            satSection2AnswerKeys.push(formValues[this.SECTION_2 + i])
          }

          this.formService.satSection2AnswerKeys  = satSection2AnswerKeys;

          for (let i = 1; i <= 15; i++) {
            satSection3AnswerKeys.push(formValues[this.SECTION_3 + i])
          }

          for (let i = 16; i <= 20; i++) {
              satSection3AnswerKeys.push(this.formToString(
                  formValues[this.SECTION_3 + i + 'a'], 
                  formValues[this.SECTION_3 + i + 'b'],
                  formValues[this.SECTION_3 + i + 'c'],
                  formValues[this.SECTION_3 + i + 'd']
                )
              );
          }

          this.formService.satSection3AnswerKeys  = satSection3AnswerKeys;

          for (let i = 1; i <= 30; i++) {
            satSection4AnswerKeys.push(formValues[this.SECTION_4 + i])
          }

          for (let i = 31; i <= 38; i++) {
            satSection4AnswerKeys.push(this.formToString(
                formValues[this.SECTION_4 + i + 'a'], 
                formValues[this.SECTION_4 + i + 'b'],
                formValues[this.SECTION_4 + i + 'c'],
                formValues[this.SECTION_4 + i + 'd']
              )
            );
        }
        
          this.formService.satSection4AnswerKeys  = satSection4AnswerKeys;

          this.db.object("/users/" + this.userService.userId).update({
            sat: {
              section1: satSection1AnswerKeys,
              section2: satSection2AnswerKeys,
              section3: satSection3AnswerKeys,
              section4: satSection4AnswerKeys
            }
          })

          this.db.object("/users/" + this.userService.userId).update({
            sat: {
              section1: satSection1AnswerKeys,
              section2: satSection2AnswerKeys,
              section3: satSection3AnswerKeys,
              section4: satSection4AnswerKeys
            }
          })

          this.pageService.setPageNumber(4);
          
          this.router.navigateByUrl('/sat-test-result');
      }
    }, reason => {})

    

    
  }

  private formToString (a: string, b: string, c: string, d:string): string {
    let ansString: string = "";
    ansString += a;
    ansString += b;
    ansString += c;
    ansString += d;

    ansString.trim();

    return ansString;
  }

}
