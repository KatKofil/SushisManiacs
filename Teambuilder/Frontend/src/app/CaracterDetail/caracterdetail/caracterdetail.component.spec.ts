import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterdetailComponent } from './caracterdetail.component';

describe('CaracterdetailComponent', () => {
  let component: CaracterdetailComponent;
  let fixture: ComponentFixture<CaracterdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracterdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
