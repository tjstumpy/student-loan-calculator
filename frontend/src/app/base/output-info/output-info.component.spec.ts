import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputInfoComponent } from './output-info.component';

describe('OutputInfoComponent', () => {
  let component: OutputInfoComponent;
  let fixture: ComponentFixture<OutputInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
