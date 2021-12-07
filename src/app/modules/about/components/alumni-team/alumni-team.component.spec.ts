import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniTeamComponent } from './alumni-team.component';

describe('AlumniTeamComponent', () => {
  let component: AlumniTeamComponent;
  let fixture: ComponentFixture<AlumniTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
