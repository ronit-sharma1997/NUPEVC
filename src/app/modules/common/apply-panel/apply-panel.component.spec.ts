import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPanelComponent } from './apply-panel.component';

describe('ApplyPanelComponent', () => {
  let component: ApplyPanelComponent;
  let fixture: ComponentFixture<ApplyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
