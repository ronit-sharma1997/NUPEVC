import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMarketingComponent } from './about-marketing.component';

describe('AboutMarketingComponent', () => {
  let component: AboutMarketingComponent;
  let fixture: ComponentFixture<AboutMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
