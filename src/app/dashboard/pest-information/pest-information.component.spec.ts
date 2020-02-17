import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestInformationComponent } from './pest-information.component';

describe('PestInformationComponent', () => {
  let component: PestInformationComponent;
  let fixture: ComponentFixture<PestInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
