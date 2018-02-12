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
    this.db.object('/tests/-L3yrr0ABLC_2uoOKnJT').update({
      form: "Official Maine SAT April 2017 Exam",
      link: "https://www1.maine.gov/doe/assessment/math-ela/documents/800888-sat-school-day-qas-test-book-5msa09-april-2017-unlocked-final-120283.pdf",
      type: "sat",
      answerKeys: {
        section1: ['C', 'A', 'C', 'B', 'B', 'A', 'D', 'C', 'C', 'A', 'D', 'D', 'B', 'B', 'A', 'A', 'C', 'D', 'C', 'B', 'C', 'C', 'D', 'A', 'D', 'C', 'D', 'A', 'C', 'C', 'B', 'A', 'A', 'B', 'B', 'D', 'D', 'C', 'D', 'A', 'B', 'C', 'A', 'B', 'D', 'C', 'D', 'B', 'B', 'C', 'A', 'C'],
        section2: ['A', 'C', 'B', 'A', 'B', 'A', 'B', 'D', 'C', 'B', 'D', 'A', 'B', 'D', 'C', 'C', 'A', 'B', 'A', 'A', 'C', 'C', 'A', 'B', 'C', 'D', 'B', 'C', 'B', 'B', 'D', 'C', 'A', 'C', 'D', 'B', 'C', 'C', 'B', 'D', 'A', 'D', 'C', 'D'],
        section3: ['B', 'B', 'A', 'C', 'B', 'D', 'C', 'A', 'C', 'A', 'D', 'D', 'B', 'B', 'C', "9", "6,7,10", "14", "210", "2,7"],
        section4: ['C', 'A', 'D', 'C', 'C', 'D', 'A', 'B', 'B', 'C', 'A', 'C', 'B', 'C', 'B', 'D', 'D', 'B', 'D', 'B', 'B', 'A', 'D', 'C', 'A', 'C', 'A', 'D', 'A', 'D', "11", "10", "1/2,0.5,.5", "2", "20", "65", "88", "2.1"]
      },
      score:{
        section1: [10, 10, 10, 10, 11, 12, 13, 14, 15, 15, 16, 17, 17, 18, 19, 19, 20, 20, 21, 22, 22, 23, 24, 24, 25, 25, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 36, 36, 37, 37, 38, 39, 39, 40],
        section2: [10, 10, 10, 11, 12, 13, 13, 14, 15, 16, 17, 18, 18, 19, 20, 20, 21, 22, 22, 23, 23, 24, 25, 25, 26, 26, 27, 27, 28, 29, 29, 30, 30, 31, 31, 32, 33, 33, 34, 35, 35, 36, 38, 39, 40],
        math: [200, 210, 220, 230, 250, 260, 280, 290, 310, 320, 340, 350, 360, 380, 390, 400, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 520, 530, 540, 540, 550, 560, 570, 580, 590, 590, 600, 610, 620, 630, 640, 650, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 770, 780, 790, 800, 800]
      }

    })
  }

  get(){
    this.db.object('/tests/-L3yoVIJ8Acdo4iv3gZ_').valueChanges().subscribe(object => console.log(object));
  }

  temp(){
    this.db.object('/tests/-L4ZDxwpyb4FbXwScsmk').update({
      form: "Official ACT June 2017 Exam",
      link: "https://drive.google.com/open?id=1zE0-JnI-E_F9vl5q-_XzsuFi0m7pFnOh",
      type: "act",
      answerKeys: {
        math: ['C', 'J', 'E', 'F', 'C', 'G', 'B', 'H', 'C', 'G', 'C', 'G', 'D', 'G', 'D', 'H', 'A', 'J', 'C', 'H', 'D', 'G', 'C', 'H', 'E', 'G', 'E', 'F', 'D', 'H', 'A', 'J', 'A', 'K', 'B', 'F', 'E', 'K', 'D', 'H', 'A', 'G', 'D', 'G', 'D', 'G', 'E', 'H', 'D', 'J', 'E', 'F', 'B', 'F', 'E', 'K', 'A', 'F', 'D', 'K'],
        science: ['A', 'H', 'C', 'J', 'A', 'J', 'D', 'F', 'D', 'H', 'B', 'J', 'C', 'J', 'A', 'F', 'D', 'G', 'C', 'G', 'B', 'F', 'B', 'H', 'C', 'G', 'D', 'F', 'A', 'J', 'B', 'J', 'D', 'G', 'D', 'G', 'C', 'F', 'C', 'H'],
        english: ['A', 'G', 'C', 'G', 'D', 'G', 'B', 'J', 'B', 'F', 'D', 'F', 'B', 'F', 'A', 'F', 'C', 'G', 'A', 'H', 'C', 'H', 'A', 'H', 'D', 'J', 'A', 'F', 'C', 'H', 'D', 'F', 'C', 'H', 'C', 'J', 'D', 'F', 'D', 'J', 'B', 'F', 'C', 'J', 'C', 'J', 'C', 'H', 'C', 'J', 'A', 'G', 'A', 'J', 'D', 'F', 'D', 'G', 'B', 'G', 'D', 'H', 'C', 'G', 'C', 'J', 'A', 'F', 'B', 'G', 'B', 'H', 'C', 'J', 'B'],
        reading: ['B', 'H', 'D', 'F', 'B', 'F', 'C', 'J', 'D', 'F', 'D', 'F', 'D', 'G', 'C', 'H', 'A', 'J', 'A', 'J', 'B', 'G', 'D', 'G', 'C', 'H', 'A', 'G', 'D', 'J', 'B', 'H', 'B', 'G', 'C', 'F', 'D', 'F', 'B', 'J']
      },
      score:{
        math: [1, 4, 6, 8, 10, 11, 12, 12, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 23, 23, 23, 24, 24, 25, 25, 25, 26, 26, 27, 27, 27, 27, 28, 28, 29, 29, 30, 30, 31, 32, 33, 34, 34, 35, 35, 36, 36],
        science: [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 16, 16, 17, 18, 18, 19, 20, 20, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 36],
        english: [1, 1, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 9, 10, 10, 11, 11, 11, 12, 12, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23, 23, 23, 24, 24, 24, 25, 25, 26, 26, 27, 27, 28, 29, 30, 31, 32, 33, 34, 34, 35, 35, 36, 36, 36],
        reading: [1, 2, 4, 5, 7, 8, 9, 10, 11, 11, 12, 13, 14, 14, 15, 16, 16, 17, 18, 19, 19, 20, 21, 22, 22, 23, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 34, 35, 36]
      }
    })
  }
}
