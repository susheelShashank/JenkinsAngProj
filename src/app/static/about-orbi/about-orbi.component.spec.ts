import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOrbiComponent } from './about-orbi.component';

describe('AboutOrbiComponent', () => {
  let component: AboutOrbiComponent;
  let fixture: ComponentFixture<AboutOrbiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOrbiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOrbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
