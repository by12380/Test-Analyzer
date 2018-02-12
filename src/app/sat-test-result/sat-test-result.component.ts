import { PageService } from './../services/pageService/page.service';
import { FormService } from './../services/formService/form.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'sat-test-result',
  templateUrl: './sat-test-result.component.html',
  styleUrls: ['./sat-test-result.component.css']
})
export class SatTestResultComponent implements OnInit {

  userSatSection1AnswerKeys = [];
  officialSatSection1AnswerKeys = [];
  userSatSection2AnswerKeys = [];
  officialSatSection2AnswerKeys = [];
  userSatSection3AnswerKeys = [];
  officialSatSection3AnswerKeys = [];
  userSatSection4AnswerKeys = [];
  officialSatSection4AnswerKeys = [];

  satEnglishScore;
  satEnglishPercentage;
  satMathScore;
  satMathPercentage;
  satSection1CorrectCount;
  satSection1Percentage;
  satSection2CorrectCount;
  satSection2Percentage;
  satSection3CorrectCount;
  satSection3Percentage;
  satSection4CorrectCount;
  satSection4Percentage;


  constructor(private db: AngularFireDatabase, private formService: FormService, private pageService: PageService, private router: Router) {

    if (this.pageService.getPageNumber() < 4) {
      this.router.navigateByUrl('/');
    }
    else {

        this.userSatSection1AnswerKeys = this.formService.satSection1AnswerKeys;
        this.userSatSection2AnswerKeys = this.formService.satSection2AnswerKeys
        this.userSatSection3AnswerKeys = this.formService.satSection3AnswerKeys;
        this.userSatSection4AnswerKeys = this.formService.satSection4AnswerKeys;

        this.officialSatSection1AnswerKeys = this.formService.satTestForm.answerKeys.section1;
        this.officialSatSection2AnswerKeys = this.formService.satTestForm.answerKeys.section2;
        this.officialSatSection3AnswerKeys = this.formService.satTestForm.answerKeys.section3;
        this.officialSatSection4AnswerKeys = this.formService.satTestForm.answerKeys.section4;

        this.satSection1Percentage = this.gradeSatSection1();
        this.satSection2Percentage = this.gradeSatSection2();
        this.satSection3Percentage = this.gradeSatSection3();
        this.satSection4Percentage = this.gradeSatSection4();
        this.satEnglishScore = this.getSatEnglishTotalScore();
        this.satMathScore = this.getSatMathTotalScore();
    }

    
  }

  ngOnInit() {
  }

  public checkAnswer(userAnswer: string, correctAnswer: string){
    let answerArray = correctAnswer.split(",");
    for (let ans of answerArray) {
      if(userAnswer === ans){
        return true;
      }
    }
    return false;
  }

  private getSatEnglishTotalScore(){
    let rawScore;
    let compositeScore;

    rawScore = this.satSection1CorrectCount + this.satSection2CorrectCount;

    compositeScore = 
      this.formService.satTestForm.score.section1[this.satSection1CorrectCount]
    + this.formService.satTestForm.score.section2[this.satSection2CorrectCount]
    
    this.satEnglishPercentage = rawScore * 100 / 106;

    return compositeScore * 10;
  }

  private getSatMathTotalScore(){
    let rawScore;
    rawScore = this.satSection3CorrectCount + this.satSection4CorrectCount;

    this.satMathPercentage = rawScore * 100 / 58;
    
    return this.formService.satTestForm.score.math[rawScore];
  }

  private gradeSatSection1(){
    let index = 0;
    let errorCount = 0;

    for (let key of this.officialSatSection1AnswerKeys) {
      if (!this.checkAnswer(this.userSatSection1AnswerKeys[index], key)) {
        errorCount++;
      }
      index++;
    }

    this.satSection1CorrectCount = 52 - errorCount;

    return (this.satSection1CorrectCount)* 100/ 52;
  }

  private gradeSatSection2(){
    let index = 0;
    let errorCount = 0;

    for (let key of this.officialSatSection2AnswerKeys) {
      if (!this.checkAnswer(this.userSatSection2AnswerKeys[index], key)) {
        errorCount++;
      }
      index++;
    }

    this.satSection2CorrectCount = 44 - errorCount;

    return (this.satSection2CorrectCount)* 100/ 44;
  }

  private gradeSatSection3(){
    let index = 0;
    let errorCount = 0;

    for (let key of this.officialSatSection3AnswerKeys) {
      if (!this.checkAnswer(this.userSatSection3AnswerKeys[index], key)) {
        errorCount++;
      }
      index++;
    }

    this.satSection3CorrectCount = 20 - errorCount;

    return (this.satSection3CorrectCount)*100/20;
  }

  private gradeSatSection4(){
    let index = 0;
    let errorCount = 0;

    for (let key of this.officialSatSection4AnswerKeys) {
      if (!this.checkAnswer(this.userSatSection4AnswerKeys[index], key)) {
        errorCount++;
      }
      index++;
    }

    this.satSection4CorrectCount = 38 - errorCount;

    return (this.satSection4CorrectCount)*100/38;
  }

}
