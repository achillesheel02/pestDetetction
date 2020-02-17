import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPracticesComponent } from './standard-practices.component';

describe('StandardPracticesComponent', () => {
  let component: StandardPracticesComponent;
  let fixture: ComponentFixture<StandardPracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardPracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
