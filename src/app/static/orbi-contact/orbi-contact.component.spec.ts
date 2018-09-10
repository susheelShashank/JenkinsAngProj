import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbiContactComponent } from './orbi-contact.component';

describe('OrbiContactComponent', () => {
  let component: OrbiContactComponent;
  let fixture: ComponentFixture<OrbiContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbiContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbiContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
