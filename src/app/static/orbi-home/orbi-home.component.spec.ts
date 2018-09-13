import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbiHomeComponent } from './orbi-home.component';

describe('OrbiHomeComponent', () => {
  let component: OrbiHomeComponent;
  let fixture: ComponentFixture<OrbiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
