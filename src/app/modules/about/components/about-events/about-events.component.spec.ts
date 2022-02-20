import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEventsComponent } from './about-events.component';

describe('AboutEventsComponent', () => {
  let component: AboutEventsComponent;
  let fixture: ComponentFixture<AboutEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
