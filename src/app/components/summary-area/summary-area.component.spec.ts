import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAreaComponent } from './summary-area.component';

describe('SummaryAreaComponent', () => {
  let component: SummaryAreaComponent;
  let fixture: ComponentFixture<SummaryAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
