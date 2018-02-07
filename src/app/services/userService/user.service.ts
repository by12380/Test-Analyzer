import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

constructor() { }

private _userId : string;
public get userId() : string {
    return this._userId;
}
public set userId(v : string) {
    this._userId = v;
}

}
