import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbiTeamComponent } from './orbi-team.component';

describe('OrbiTeamComponent', () => {
  let component: OrbiTeamComponent;
  let fixture: ComponentFixture<OrbiTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbiTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbiTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
