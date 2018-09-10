import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbiPortfolioComponent } from './orbi-portfolio.component';

describe('OrbiPortfolioComponent', () => {
  let component: OrbiPortfolioComponent;
  let fixture: ComponentFixture<OrbiPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbiPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbiPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
