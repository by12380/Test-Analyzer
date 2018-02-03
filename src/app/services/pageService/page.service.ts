import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PageService {

    private page: number = 1;

    constructor() { }

    public getPageNumber () {
        return this.page;
    }
    
    public setPageNumber (page: number) {
        this.page = page;
    }

}

