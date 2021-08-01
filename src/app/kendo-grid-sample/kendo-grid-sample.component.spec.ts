import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoGridSampleComponent } from './kendo-grid-sample.component';

describe('KendoGridSampleComponent', () => {
  let component: KendoGridSampleComponent;
  let fixture: ComponentFixture<KendoGridSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoGridSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoGridSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
