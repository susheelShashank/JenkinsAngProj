import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbiPersonComponent } from './orbi-person.component';

describe('OrbiPersonComponent', () => {
  let component: OrbiPersonComponent;
  let fixture: ComponentFixture<OrbiPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbiPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbiPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
