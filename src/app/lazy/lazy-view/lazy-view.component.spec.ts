import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyViewComponent } from './lazy-view.component';

describe('LazyViewComponent', () => {
  let component: LazyViewComponent;
  let fixture: ComponentFixture<LazyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
