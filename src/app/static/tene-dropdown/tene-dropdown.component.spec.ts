import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeneDropdownComponent } from './tene-dropdown.component';

describe('TeneDropdownComponent', () => {
  let component: TeneDropdownComponent;
  let fixture: ComponentFixture<TeneDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeneDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeneDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
