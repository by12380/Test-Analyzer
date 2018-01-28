import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatAnswerSheetComponent } from './sat-answer-sheet.component';

describe('SatAnswerSheetComponent', () => {
  let component: SatAnswerSheetComponent;
  let fixture: ComponentFixture<SatAnswerSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatAnswerSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatAnswerSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
