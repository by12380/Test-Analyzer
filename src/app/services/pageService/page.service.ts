import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PageService {

    private page: number = 1;
    private pageSource = new BehaviorSubject<number>(this.page);
    public pageNumber = this.pageSource.asObservable();

    constructor() { }

    public setPageNumber (page: number) {
        this.page = page;
        this.pageSource.next(this.page);
    }

}

