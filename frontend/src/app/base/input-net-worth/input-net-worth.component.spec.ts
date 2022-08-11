import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNetWorthComponent } from './input-net-worth.component';

describe('InputNetWorthComponent', () => {
  let component: InputNetWorthComponent;
  let fixture: ComponentFixture<InputNetWorthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNetWorthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNetWorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
