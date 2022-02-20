import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEboardComponent } from './about-eboard.component';

describe('AboutEboardComponent', () => {
  let component: AboutEboardComponent;
  let fixture: ComponentFixture<AboutEboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
