import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorPageComponent } from './advisor-page.component';

describe('AdvisorPageComponent', () => {
  let component: AdvisorPageComponent;
  let fixture: ComponentFixture<AdvisorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
