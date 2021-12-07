import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSpecificTeamComponent } from './about-specific-team.component';

describe('AboutSpecificTeamComponent', () => {
  let component: AboutSpecificTeamComponent;
  let fixture: ComponentFixture<AboutSpecificTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSpecificTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSpecificTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
