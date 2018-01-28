import { PageService } from './../services/pageService/page.service';
import { FormService } from './../services/formService/form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sat-answer-sheet',
  templateUrl: './sat-answer-sheet.component.html',
  styleUrls: ['./sat-answer-sheet.component.css']
})
export class SatAnswerSheetComponent implements OnInit {

  readonly TEST_ANSWER = "testAnswer";

  constructor(private formService: FormService, private pageService: PageService) { }

  ngOnInit() {
  }

  store(formValues){

    let satAnswerKeys: string[] = [];
    let ansString: string;

    satAnswerKeys.push(formValues.testAnswer1);
    satAnswerKeys.push(formValues.testAnswer2);
    satAnswerKeys.push(formValues.testAnswer3);
    satAnswerKeys.push(formValues.testAnswer4);
    satAnswerKeys.push(formValues.testAnswer5);
    satAnswerKeys.push(formValues.testAnswer6);
    satAnswerKeys.push(formValues.testAnswer7);
    satAnswerKeys.push(formValues.testAnswer8);
    satAnswerKeys.push(formValues.testAnswer9);
    satAnswerKeys.push(formValues.testAnswer10);
    satAnswerKeys.push(formValues.testAnswer11);
    satAnswerKeys.push(formValues.testAnswer12);
    satAnswerKeys.push(formValues.testAnswer13);
    satAnswerKeys.push(formValues.testAnswer14);
    satAnswerKeys.push(formValues.testAnswer15);

    satAnswerKeys.push(this.formToString(
      formValues.testAnswer16a, formValues.testAnswer16b,
      formValues.testAnswer16c, formValues.testAnswer16d,));
    
    satAnswerKeys.push(this.formToString(
      formValues.testAnswer17a, formValues.testAnswer17b,
      formValues.testAnswer17c, formValues.testAnswer17d,));

    satAnswerKeys.push(this.formToString(
      formValues.testAnswer18a, formValues.testAnswer18b,
      formValues.testAnswer18c, formValues.testAnswer18d,));

    satAnswerKeys.push(this.formToString(
      formValues.testAnswer19a, formValues.testAnswer19b,
      formValues.testAnswer19c, formValues.testAnswer19d,));
    
    satAnswerKeys.push(this.formToString(
      formValues.testAnswer20a, formValues.testAnswer20b,
      formValues.testAnswer20c, formValues.testAnswer20d,));

    this.formService.satAnswerKeys = satAnswerKeys;

    this.pageService.setPageNumber(4);
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
