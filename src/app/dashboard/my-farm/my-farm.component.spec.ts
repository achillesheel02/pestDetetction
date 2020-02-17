import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFarmComponent } from './my-farm.component';

describe('MyFarmComponent', () => {
  let component: MyFarmComponent;
  let fixture: ComponentFixture<MyFarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
