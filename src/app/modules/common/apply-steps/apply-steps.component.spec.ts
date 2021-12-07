import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyStepsComponent } from './apply-steps.component';

describe('ApplyStepsComponent', () => {
  let component: ApplyStepsComponent;
  let fixture: ComponentFixture<ApplyStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
