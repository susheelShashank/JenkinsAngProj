import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbiBhalsarComponent } from './orbi-bhalsar.component';

describe('OrbiBhalsarComponent', () => {
  let component: OrbiBhalsarComponent;
  let fixture: ComponentFixture<OrbiBhalsarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbiBhalsarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbiBhalsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
