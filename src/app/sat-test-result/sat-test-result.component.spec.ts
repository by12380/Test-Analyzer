import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatTestResultComponent } from './sat-test-result.component';

describe('SatTestResultComponent', () => {
  let component: SatTestResultComponent;
  let fixture: ComponentFixture<SatTestResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatTestResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatTestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
