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

  type;
  form;
  userSatSection3AnswerKeys = [];
  officialSatSection3AnswerKeys = [];
  userSatSection4AnswerKeys = [];
  officialSatSection4AnswerKeys = [];
  readonly SAT = "sat";

  timer;

  satMathGrade;
  satMathPercentage;
  satSection3CorrectCount;
  satSection3Grade;
  satSection4CorrectCount;
  satSection4Grade;


  constructor(private db: AngularFireDatabase, private formService: FormService, private pageService: PageService, private router: Router) {

    if (this.pageService.getPageNumber() < 4) {
      this.router.navigateByUrl('/');
    }
    else {
      this.type = this.formService.type;
      this.form = this.formService.testForm;
      if(this.type == this.SAT){
        this.userSatSection3AnswerKeys = this.formService.satSection3AnswerKeys;
        this.userSatSection4AnswerKeys = this.formService.satSection4AnswerKeys;

        this.db.list('/tests', ref => ref.orderByChild('form').equalTo(this.form)).valueChanges().subscribe(
          test => {
            this.officialSatSection3AnswerKeys = test[0]["answerKeys"]["section3"];
            this.officialSatSection4AnswerKeys = test[0]["answerKeys"]["section4"];

            this.satSection3Grade = this.gradeSatSection3();
            this.satSection4Grade = this.gradeSatSection4();
            this.satMathGrade = this.getSatMathTotalScore();

          }
        );
      
    }
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

  private getSatMathTotalScore(){
    let rawScore;
    rawScore = this.satSection3CorrectCount + this.satSection4CorrectCount;
    this.satMathPercentage = rawScore/58.0*100;
    return Math.round(rawScore * 600/58.0/10.0)*10 + 200;
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
