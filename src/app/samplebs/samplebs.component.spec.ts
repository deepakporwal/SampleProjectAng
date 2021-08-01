import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplebsComponent } from './samplebs.component';

describe('SamplebsComponent', () => {
  let component: SamplebsComponent;
  let fixture: ComponentFixture<SamplebsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplebsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplebsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
