import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbiPartnerDetailsComponent } from './orbi-partners-details.component';

describe('OrbiPartnersDetailsComponent', () => {
  let component: OrbiPartnerDetailsComponent;
  let fixture: ComponentFixture<OrbiPartnerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbiPartnerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbiPartnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
