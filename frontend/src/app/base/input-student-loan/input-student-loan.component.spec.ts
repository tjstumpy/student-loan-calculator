import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStudentLoanComponent } from './input-student-loan.component';

describe('InputStudentLoanComponent', () => {
  let component: InputStudentLoanComponent;
  let fixture: ComponentFixture<InputStudentLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputStudentLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputStudentLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
