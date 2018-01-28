import { FormService } from './services/formService/form.service';
import { environment } from './../environments/environment';
import { PageService } from './services/pageService/page.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { SatAnswerSheetComponent } from './sat-answer-sheet/sat-answer-sheet.component';
import { TestResultComponent } from './test-result/test-result.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    FormSelectComponent,
    SatAnswerSheetComponent,
    TestResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    PageService,
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
