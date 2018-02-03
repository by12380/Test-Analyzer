import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }
 
  send(){
    this.db.list('/tests').push({
      form: "Official SAT Maine 2017 Exam",
      link: "www.google.com",
      type: "sat",
      answerKeys: {
        section3: ['B', 'B', 'A', 'C', 'B', 'D', 'C', 'A', 'C', 'A', 'D', 'D', 'B', 'B', 'C', "9", "6,7,10", "14", "210", "2,7"],
        section4: ['C', 'A', 'D', 'C', 'C', 'D', 'A', 'B', 'B', 'C', 'A', 'C', 'B', 'C', 'B', 'D', 'D', 'B', 'D', 'B', 'B', 'A', 'D', 'C', 'A', 'C', 'A', 'D', 'A', 'D', "11", "10", "1/2,0.5,.5", "2", "20", "65", "88", "2.1"]
      }
    })
  }

  get(){
    this.db.object('/tests/-L3yoVIJ8Acdo4iv3gZ_').valueChanges().subscribe(object => console.log(object));
  }
}
