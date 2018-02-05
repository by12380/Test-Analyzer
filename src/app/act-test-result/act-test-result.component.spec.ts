import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActTestResultComponent } from './act-test-result.component';

describe('ActTestResultComponent', () => {
  let component: ActTestResultComponent;
  let fixture: ComponentFixture<ActTestResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActTestResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActTestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
