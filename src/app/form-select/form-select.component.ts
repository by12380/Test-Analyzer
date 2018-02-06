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
  defaultForm = {};

  constructor(private pageService: PageService, private db: AngularFireDatabase, private formService: FormService, private router: Router) {
    this.tests$ = db.list('/tests').valueChanges();
    
    if (this.pageService.getPageNumber() < 2) {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit() {
  }

  byForm(o1, o2){
    return o1.form == "Official Maine SAT April 2017 Exam";
  }

  public submit(formValues) {

    if (formValues.testForm.type == 'sat') {
      this.formService.satTestForm = formValues.testForm;
      this.pageService.setPageNumber(3);
      this.router.navigateByUrl('/sat-answer-sheet');
    }
    else if (formValues.testForm.type == 'act') {
      this.formService.actTestForm = formValues.testForm;
      this.pageService.setPageNumber(3);
      this.router.navigateByUrl('/act-answer-sheet');
    }
    
  }

  ngOnDestroy(){

  }
}
