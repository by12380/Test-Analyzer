import { Router } from '@angular/router';
import { FormService } from './../services/formService/form.service';
import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/pageService/page.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit, OnDestroy {

  tests$;

  constructor(private pageService: PageService, private db: AngularFireDatabase, private formService: FormService, private router: Router) {
    this.tests$ = db.list('/tests').valueChanges();
    console.log(this.pageService.getPageNumber());
    if (this.pageService.getPageNumber() < 2) {
      this.router.navigateByUrl('/');
    }
  }

  defaultOption = 1;

  ngOnInit() {
  }

  public submit(formValues) {

    let testForm: string;

    testForm = formValues.testForm;
    this.formService.testForm = testForm;

    if (testForm.includes("SAT")) {
      this.formService.type = "sat";

      this.pageService.setPageNumber(3);
      this.router.navigateByUrl('/sat-answer-sheet');
    }
    else if (testForm.includes("ACT")) {
      //TODO: Set ACT Page Number
    }
    
    
  }

  ngOnDestroy(){

  }
}
