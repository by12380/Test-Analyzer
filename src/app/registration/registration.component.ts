import { PageService } from './../services/pageService/page.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  emailQuery: Subscription;

  constructor(private pageService: PageService, private db: AngularFireDatabase) {
  }

  ngOnInit() {
  }

  async validate(formValues) {
    this.emailQuery = await this.db.list('/users', ref => ref.orderByChild('email').equalTo(formValues.email)).valueChanges().subscribe( 
      users => {
        if (users.length == 0) {
          this.addUser(formValues);
        }      
        this.pageService.setPageNumber(2);
      }
    );
  }

  private addUser(formValues){
    this.db.list('/users').push({
      firstname: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email
    }).then( users => console.log(users));
  }

  ngOnDestroy() {
    this.emailQuery.unsubscribe();
  }

}
