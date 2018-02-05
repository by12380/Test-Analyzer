import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/formService/form.service';
import { PageService } from '../services/pageService/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-act-test-result',
  templateUrl: './act-test-result.component.html',
  styleUrls: ['./act-test-result.component.css']
})
export class ActTestResultComponent implements OnInit {

  userActSection2AnswerKeys = [];
  officialActSection2AnswerKeys = [];
  userActSection4AnswerKeys = [];
  officialActSection4AnswerKeys = [];

  mathPercentage;
  mathScore;
  sciencePercentage;
  scienceScore;


  constructor(private formService: FormService, private pageService: PageService, private router: Router) { 

    if (this.pageService.getPageNumber() < 4) {
      this.router.navigateByUrl('/');
    }
    else {

        this.userActSection2AnswerKeys = this.formService.actSection2AnswerKeys
        this.userActSection4AnswerKeys = this.formService.actSection4AnswerKeys

        this.officialActSection2AnswerKeys = this.formService.actTestForm.answerKeys.math;
        this.officialActSection4AnswerKeys = this.formService.actTestForm.answerKeys.science;

        this.mathScore = this.gradeActMath();
        this.scienceScore = this.gradeActScience();

    }
  }

  ngOnInit() {
  }

  gradeActMath(){
    let index = 0;
    let correctCount = 0;

    for (let key of this.officialActSection2AnswerKeys) {
      if (key == this.userActSection2AnswerKeys[index]) {
        correctCount++;
      }
      index++;
    }

    this.mathPercentage = correctCount * 100 / 60;

    return this.formService.actTestForm.score.math[correctCount];
  }

  gradeActScience(){
    let index = 0;
    let correctCount = 0;

    for (let key of this.officialActSection4AnswerKeys) {
      if (key == this.userActSection4AnswerKeys[index]) {
        correctCount++;
      }
      index++;
    }

    this.sciencePercentage = correctCount * 100 / 40;

    return this.formService.actTestForm.score.science[correctCount];
  }

}
