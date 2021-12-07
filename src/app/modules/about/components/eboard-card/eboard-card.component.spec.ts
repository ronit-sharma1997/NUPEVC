import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EboardCardComponent } from './eboard-card.component';

describe('EboardCardComponent', () => {
  let component: EboardCardComponent;
  let fixture: ComponentFixture<EboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EboardCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
