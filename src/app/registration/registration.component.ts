import { UserService } from './../services/userService/user.service';
import { Router } from '@angular/router';
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
  loading = false;

  constructor(private userService: UserService, private pageService: PageService, private db: AngularFireDatabase, private router: Router) {
  }

  ngOnInit() {
  }

  async validate(formValues) {
    this.loading = true;
    this.emailQuery = await this.db.list('/users', ref => ref.orderByChild('email').equalTo(formValues.email)).snapshotChanges().subscribe( 
      users => {
        if (users.length == 0) {
          this.addUser(formValues);
        } else {
          this.userService.userId = users[0].key;
        }

        this.pageService.setPageNumber(2);
        this.router.navigateByUrl('/form-select');
        this.loading = false;
      }
    );
  }

  private addUser(formValues){
    this.db.list('/users').push({
      firstname: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email
    }).then( user => {
      this.userService.userId = user.key;
    });
  }

  ngOnDestroy() {
    this.emailQuery.unsubscribe();
  }

}
