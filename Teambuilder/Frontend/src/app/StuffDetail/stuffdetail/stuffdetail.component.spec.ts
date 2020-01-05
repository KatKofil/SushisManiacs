import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffdetailComponent } from './stuffdetail.component';

describe('StuffdetailComponent', () => {
  let component: StuffdetailComponent;
  let fixture: ComponentFixture<StuffdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
