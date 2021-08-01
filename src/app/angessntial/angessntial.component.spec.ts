import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngessntialComponent } from './angessntial.component';

describe('AngessntialComponent', () => {
  let component: AngessntialComponent;
  let fixture: ComponentFixture<AngessntialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngessntialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngessntialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
