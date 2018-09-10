import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbiPartnersComponent } from './orbi-partners.component';

describe('OrbiPartnersComponent', () => {
  let component: OrbiPartnersComponent;
  let fixture: ComponentFixture<OrbiPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbiPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbiPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
