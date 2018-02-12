import { ActTestForm } from './../../models/actTestForm';
import { Injectable } from '@angular/core';
import { SatTestForm } from '../../models/satTestForm';

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
    
    
    private _satSection1AnswerKeys : string[];
    public get satSection1AnswerKeys() : string[] {
        return this._satSection1AnswerKeys;
    }
    public set satSection1AnswerKeys(v : string[]) {
        this._satSection1AnswerKeys = v;
    }

    
    private _satSection2AnswerKeys : string[];
    public get satSection2AnswerKeys() : string[] {
        return this._satSection2AnswerKeys;
    }
    public set satSection2AnswerKeys(v : string[]) {
        this._satSection2AnswerKeys = v;
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
    
    
    private _actSection1AnswerKeys : string[];
    public get actSection1AnswerKeys() : string[] {
        return this._actSection1AnswerKeys;
    }
    public set actSection1AnswerKeys(v : string[]) {
        this._actSection1AnswerKeys = v;
    }
    
    
    private _actSection2AnswerKeys : string[];
    public get actSection2AnswerKeys() : string[] {
        return this._actSection2AnswerKeys;
    }
    public set actSection2AnswerKeys(v : string[]) {
        this._actSection2AnswerKeys = JSON.parse(JSON.stringify(v));
    }

    
    private _actSection3AnswerKeys : string[];
    public get actSection3AnswerKeys() : string[] {
        return this._actSection3AnswerKeys;
    }
    public set actSection3AnswerKeys(v : string[]) {
        this._actSection3AnswerKeys = v;
    }
    
    
    private _actSection4AnswerKeys : string[];
    public get actSection4AnswerKeys() : string[] {
        return this._actSection4AnswerKeys;
    }
    public set actSection4AnswerKeys(v : string[]) {
        this._actSection4AnswerKeys = JSON.parse(JSON.stringify(v));
    }
    

    
    private _satTestForm : SatTestForm;
    public get satTestForm() : SatTestForm {
        return this._satTestForm;
    }
    public set satTestForm(v : SatTestForm) {
        this._satTestForm = JSON.parse(JSON.stringify(v));
    }

    
    private _actTestForm : ActTestForm;
    public get actTestForm() : ActTestForm {
        return this._actTestForm;
    }
    public set actTestForm(v : ActTestForm) {
        this._actTestForm = JSON.parse(JSON.stringify(v));
    }
    
    
    
    

        
    

}