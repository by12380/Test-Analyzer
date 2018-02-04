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
      form: "Official ACT June 2017 Exam",
      link: "https://drive.google.com/open?id=1zE0-JnI-E_F9vl5q-_XzsuFi0m7pFnOh",
      type: "act",
      answerKeys: {
        math: ['B', 'B', 'A', 'C', 'B', 'D', 'C', 'A', 'C', 'A', 'D', 'D', 'B', 'B', 'C', "9", "6,7,10", "14", "210", "2,7"],
        science: ['C', 'A', 'D', 'C', 'C', 'D', 'A', 'B', 'B', 'C', 'A', 'C', 'B', 'C', 'B', 'D', 'D', 'B', 'D', 'B', 'B', 'A', 'D', 'C', 'A', 'C', 'A', 'D', 'A', 'D', "11", "10", "1/2,0.5,.5", "2", "20", "65", "88", "2.1"]
      },
      score:{
        math: [1, 4, 6, 8, 10, 11, 12, 12, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 23, 23, 23, 24, 24, 25, 25, 25, 26, 26, 27, 27, 27, 27, 28, 28, 29, 29, 30, 30, 31, 32, 33, 34, 34, 35, 35, 36, 36],
        science: [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 16, 16, 17, 18, 18, 19, 20, 20, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 36]
      }
    })
  }

  get(){
    this.db.object('/tests/-L3yoVIJ8Acdo4iv3gZ_').valueChanges().subscribe(object => console.log(object));
  }

  temp(){
    this.db.list('/tests').push({
      form: "Official SAT Maine 2017 Exam",
      link: "https://www1.maine.gov/doe/assessment/math-ela/documents/800888-sat-school-day-qas-test-book-5msa09-april-2017-unlocked-final-120283.pdf",
      type: "act",
      answerKeys: {
        section3: ['B', 'B', 'A', 'C', 'B', 'D', 'C', 'A', 'C', 'A', 'D', 'D', 'B', 'B', 'C', "9", "6,7,10", "14", "210", "2,7"],
        section4: ['C', 'A', 'D', 'C', 'C', 'D', 'A', 'B', 'B', 'C', 'A', 'C', 'B', 'C', 'B', 'D', 'D', 'B', 'D', 'B', 'B', 'A', 'D', 'C', 'A', 'C', 'A', 'D', 'A', 'D', "11", "10", "1/2,0.5,.5", "2", "20", "65", "88", "2.1"]
      }
    })
  }
}
