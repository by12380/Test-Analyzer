import { Component } from '@angular/core';
import { PageService } from './services/pageService/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public pageNumber = 1;

  constructor(private pageService: PageService) {
    pageService.pageNumber.subscribe( pageNumber => this.pageNumber = pageNumber);
  }

  ngOnInit(){

  }
  
}
