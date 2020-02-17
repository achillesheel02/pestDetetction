import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestSearchComponent } from './pest-search.component';

describe('PestSearchComponent', () => {
  let component: PestSearchComponent;
  let fixture: ComponentFixture<PestSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
