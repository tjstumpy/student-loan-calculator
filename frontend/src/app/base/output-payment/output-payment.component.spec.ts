import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPaymentComponent } from './output-payment.component';

describe('OutputPaymentComponent', () => {
  let component: OutputPaymentComponent;
  let fixture: ComponentFixture<OutputPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
