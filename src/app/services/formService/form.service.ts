import { TestForm } from './../../models/testForm';
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
    
    
    private _satSection3AnswerKeys : string[];
    public get satSection3AnswerKeys() : string[] {
        return this._satSection3AnswerKeys;
    }
    public set satSection3AnswerKeys(v : string[]) {
        this._satSection3AnswerKeys = v;
    }

    
    private _satSection4AnswerKeys : string[];
    public get satSection4AnswerKeys() : string[] {
        return this._satSection4AnswerKeys;
    }
    public set satSection4AnswerKeys(v : string[]) {
        this._satSection4AnswerKeys = v;
    }
    
    
    private _actAnswerKeys : string[];
    public get actAnswerKeys() : string[] {
        return this._actAnswerKeys;
    }
    public set actAnswerKeys(v : string[]) {
        this._actAnswerKeys = v;
    }

    
    private _satTestForm : TestForm;
    public get satTestForm() : TestForm {
        return this._satTestForm;
    }
    public set satTestForm(v : TestForm) {
        this._satTestForm = JSON.parse(JSON.stringify(v));
    }
    
    

        
    

}