import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplengrxComponent } from './samplengrx.component';

describe('SamplengrxComponent', () => {
  let component: SamplengrxComponent;
  let fixture: ComponentFixture<SamplengrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplengrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplengrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
