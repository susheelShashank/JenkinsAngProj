import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbiCarsouelComponent } from './orbi-carsouel.component';

describe('OrbiCarsouelComponent', () => {
  let component: OrbiCarsouelComponent;
  let fixture: ComponentFixture<OrbiCarsouelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbiCarsouelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbiCarsouelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
