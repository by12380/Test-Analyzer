import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActAnswerSheetComponent } from './act-answer-sheet.component';

describe('ActAnswerSheetComponent', () => {
  let component: ActAnswerSheetComponent;
  let fixture: ComponentFixture<ActAnswerSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActAnswerSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActAnswerSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
