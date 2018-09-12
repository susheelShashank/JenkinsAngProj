import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbiCamsonComponent } from './orbi-camson.component';

describe('OrbiCamsonComponent', () => {
  let component: OrbiCamsonComponent;
  let fixture: ComponentFixture<OrbiCamsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbiCamsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbiCamsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
