import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/pageService/page.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {

  tests$;

  constructor(private pageService: PageService, private db: AngularFireDatabase) {
    this.tests$ = db.list('/tests').valueChanges();
  }

  defaultOption = 1;

  ngOnInit() {
  }

  public submit(formValues) {
    this.pageService.setPageNumber(3);
  }
}
