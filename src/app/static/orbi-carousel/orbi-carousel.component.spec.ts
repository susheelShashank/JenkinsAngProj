import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbiCarouselComponent } from './orbi-carousel.component';

describe('OrbiCarouselComponent', () => {
  let component: OrbiCarouselComponent;
  let fixture: ComponentFixture<OrbiCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbiCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbiCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
