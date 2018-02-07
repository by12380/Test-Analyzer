import { UserService } from './services/userService/user.service';
import { ActTestForm } from './models/actTestForm';
import { FormService } from './services/formService/form.service';
import { environment } from './../environments/environment';
import { PageService } from './services/pageService/page.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { SatAnswerSheetComponent } from './sat-answer-sheet/sat-answer-sheet.component';
import { SatTestResultComponent } from './sat-test-result/sat-test-result.component';
import { FormUpdateComponent } from './form-update/form-update.component';
import { ActAnswerSheetComponent } from './act-answer-sheet/act-answer-sheet.component';
import { ActTestResultComponent } from './act-test-result/act-test-result.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    FormSelectComponent,
    SatAnswerSheetComponent,
    SatTestResultComponent,
    FormUpdateComponent,
    ActAnswerSheetComponent,
    ActTestResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: RegistrationComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'form-select', component: FormSelectComponent},
      {path: 'sat-answer-sheet', component: SatAnswerSheetComponent},
      {path: 'sat-test-result', component: SatTestResultComponent},
      {path: 'act-answer-sheet', component: ActAnswerSheetComponent},
      {path: 'act-test-result', component: ActTestResultComponent},
      {path: 'form-update', component: FormUpdateComponent}
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgbModule.forRoot()
  ],
  providers: [
    PageService,
    FormService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
