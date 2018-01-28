import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
    
    constructor() { }
   
    private _firstName : string;
    public get firstName() : string {
        return this._firstName;
    }
    public set firstName(v : string) {
        this._firstName = v;
    }

    
    private _lastName : string;
    public get lastName() : string {
        return this._lastName;
    }
    public set lastName(v : string) {
        this._lastName = v;
    }
    
    
    private _email : string;
    public get email() : string {
        return this._email;
    }
    public set email(v : string) {
        this._email = v;
    }
    
    
    private _testForm : string;
    public get testForm() : string {
        return this._testForm;
    }
    public set testForm(v : string) {
        this._testForm = v;
    }
    
    
    
    private _satAnswerKeys : string[];
    public get satAnswerKeys() : string[] {
        return this._satAnswerKeys;
    }
    public set satAnswerKeys(v : string[]) {
        this._satAnswerKeys = v;
    }

    
    
    private _actAnswerKeys : string[];
    public get actAnswerKeys() : string[] {
        return this._actAnswerKeys;
    }
    public set actAnswerKeys(v : string[]) {
        this._actAnswerKeys = v;
    }
    
    
    

}