import { PageService } from './../services/pageService/page.service';
import { FormService } from './../services/formService/form.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sat-answer-sheet',
  templateUrl: './sat-answer-sheet.component.html',
  styleUrls: ['./sat-answer-sheet.component.css']
})
export class SatAnswerSheetComponent implements OnInit {

  readonly SECTION_3 = "section3_";
  readonly SECTION_4 = "section4_";
  link: string;

  constructor(private formService: FormService, private pageService: PageService, private router: Router) {
    if (this.pageService.getPageNumber() < 3) {
      this.router.navigateByUrl('/');
    } else {
      this.link = this.formService.link;
    }
  }

  ngOnInit() {
  }

  store(formValues){
    console.log(formValues);

    let satSection3AnswerKeys: string[] = [];
    let satSection4AnswerKeys: string[] = [];

    satSection3AnswerKeys.push(formValues.section3_1);
    satSection3AnswerKeys.push(formValues.section3_2);
    satSection3AnswerKeys.push(formValues.section3_3);
    satSection3AnswerKeys.push(formValues.section3_4);
    satSection3AnswerKeys.push(formValues.section3_5);
    satSection3AnswerKeys.push(formValues.section3_6);
    satSection3AnswerKeys.push(formValues.section3_7);
    satSection3AnswerKeys.push(formValues.section3_8);
    satSection3AnswerKeys.push(formValues.section3_9);
    satSection3AnswerKeys.push(formValues.section3_10);
    satSection3AnswerKeys.push(formValues.section3_11);
    satSection3AnswerKeys.push(formValues.section3_12);
    satSection3AnswerKeys.push(formValues.section3_13);
    satSection3AnswerKeys.push(formValues.section3_14);
    satSection3AnswerKeys.push(formValues.section3_15);

    satSection3AnswerKeys.push(this.formToString(
      formValues.section3_16a, formValues.section3_16b,
      formValues.section3_16c, formValues.section3_16d,));
    
    satSection3AnswerKeys.push(this.formToString(
      formValues.section3_17a, formValues.section3_17b,
      formValues.section3_17c, formValues.section3_17d,));

    satSection3AnswerKeys.push(this.formToString(
      formValues.section3_18a, formValues.section3_18b,
      formValues.section3_18c, formValues.section3_18d,));

    satSection3AnswerKeys.push(this.formToString(
      formValues.section3_19a, formValues.section3_19b,
      formValues.section3_19c, formValues.section3_19d,));
    
    satSection3AnswerKeys.push(this.formToString(
      formValues.section3_20a, formValues.section3_20b,
      formValues.section3_20c, formValues.section3_20d,));

    this.formService.satSection3AnswerKeys  = satSection3AnswerKeys;

    satSection4AnswerKeys.push(formValues.section4_1);
    satSection4AnswerKeys.push(formValues.section4_2);
    satSection4AnswerKeys.push(formValues.section4_3);
    satSection4AnswerKeys.push(formValues.section4_4);
    satSection4AnswerKeys.push(formValues.section4_5);
    satSection4AnswerKeys.push(formValues.section4_6);
    satSection4AnswerKeys.push(formValues.section4_7);
    satSection4AnswerKeys.push(formValues.section4_8);
    satSection4AnswerKeys.push(formValues.section4_9);
    satSection4AnswerKeys.push(formValues.section4_10);
    satSection4AnswerKeys.push(formValues.section4_11);
    satSection4AnswerKeys.push(formValues.section4_12);
    satSection4AnswerKeys.push(formValues.section4_13);
    satSection4AnswerKeys.push(formValues.section4_14);
    satSection4AnswerKeys.push(formValues.section4_15);
    satSection4AnswerKeys.push(formValues.section4_16);
    satSection4AnswerKeys.push(formValues.section4_17);
    satSection4AnswerKeys.push(formValues.section4_18);
    satSection4AnswerKeys.push(formValues.section4_19);
    satSection4AnswerKeys.push(formValues.section4_20);
    satSection4AnswerKeys.push(formValues.section4_21);
    satSection4AnswerKeys.push(formValues.section4_22);
    satSection4AnswerKeys.push(formValues.section4_23);
    satSection4AnswerKeys.push(formValues.section4_24);
    satSection4AnswerKeys.push(formValues.section4_25);
    satSection4AnswerKeys.push(formValues.section4_26);
    satSection4AnswerKeys.push(formValues.section4_27);
    satSection4AnswerKeys.push(formValues.section4_28);
    satSection4AnswerKeys.push(formValues.section4_29);
    satSection4AnswerKeys.push(formValues.section4_30);

    satSection4AnswerKeys.push(this.formToString(
      formValues.section4_31a, formValues.section4_31b,
      formValues.section4_31c, formValues.section4_31d,));
    satSection4AnswerKeys.push(this.formToString(
      formValues.section4_32a, formValues.section4_32b,
      formValues.section4_32c, formValues.section4_32d,));
    satSection4AnswerKeys.push(this.formToString(
      formValues.section4_33a, formValues.section4_33b,
      formValues.section4_33c, formValues.section4_33d,));
    satSection4AnswerKeys.push(this.formToString(
      formValues.section4_34a, formValues.section4_34b,
      formValues.section4_34c, formValues.section4_34d,));
    satSection4AnswerKeys.push(this.formToString(
      formValues.section4_35a, formValues.section4_35b,
      formValues.section4_35c, formValues.section4_35d,));
    satSection4AnswerKeys.push(this.formToString(
      formValues.section4_36a, formValues.section4_36b,
      formValues.section4_36c, formValues.section4_36d,));
    satSection4AnswerKeys.push(this.formToString(
      formValues.section4_37a, formValues.section4_37b,
      formValues.section4_37c, formValues.section4_37d,));
    satSection4AnswerKeys.push(this.formToString(
      formValues.section4_38a, formValues.section4_38b,
      formValues.section4_38c, formValues.section4_38d,));
  
    this.formService.satSection4AnswerKeys  = satSection4AnswerKeys;

    this.pageService.setPageNumber(4);
    
    this.router.navigateByUrl('/sat-test-result');
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
