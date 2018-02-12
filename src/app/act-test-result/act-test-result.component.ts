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

  userActSection1AnswerKeys = [];
  officialActSection1AnswerKeys = [];
  userActSection2AnswerKeys = [];
  officialActSection2AnswerKeys = [];
  userActSection3AnswerKeys = [];
  officialActSection3AnswerKeys = [];
  userActSection4AnswerKeys = [];
  officialActSection4AnswerKeys = [];

  englishPercentage;
  englishScore;
  mathPercentage;
  mathScore;
  readingPercentage;
  readingScore;
  sciencePercentage;
  scienceScore;


  constructor(private formService: FormService, private pageService: PageService, private router: Router) { 

    if (this.pageService.getPageNumber() < 4) {
      this.router.navigateByUrl('/');
    }
    else {

        this.userActSection1AnswerKeys = this.formService.actSection1AnswerKeys;
        this.userActSection2AnswerKeys = this.formService.actSection2AnswerKeys;
        this.userActSection3AnswerKeys = this.formService.actSection3AnswerKeys;
        this.userActSection4AnswerKeys = this.formService.actSection4AnswerKeys;

        this.officialActSection1AnswerKeys = this.formService.actTestForm.answerKeys.english;
        this.officialActSection2AnswerKeys = this.formService.actTestForm.answerKeys.math;
        this.officialActSection3AnswerKeys = this.formService.actTestForm.answerKeys.reading;
        this.officialActSection4AnswerKeys = this.formService.actTestForm.answerKeys.science;

        this.englishScore = this.gradeActEnglish();
        this.mathScore = this.gradeActMath();
        this.readingScore = this.gradeActReading();
        this.scienceScore = this.gradeActScience();

    }
  }

  ngOnInit() {
  }

  gradeActEnglish(){
    let index = 0;
    let correctCount = 0;

    for (let key of this.officialActSection1AnswerKeys) {
      if (key == this.userActSection1AnswerKeys[index]) {
        correctCount++;
      }
      index++;
    }

    this.englishPercentage = correctCount * 100 / 75;

    return this.formService.actTestForm.score.english[correctCount];
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

  gradeActReading(){
    let index = 0;
    let correctCount = 0;

    for (let key of this.officialActSection3AnswerKeys) {
      if (key == this.userActSection3AnswerKeys[index]) {
        correctCount++;
      }
      index++;
    }

    this.readingPercentage = correctCount * 100 / 40;

    return this.formService.actTestForm.score.reading[correctCount];
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
