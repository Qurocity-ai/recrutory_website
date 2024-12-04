import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalInsightsTab2Component } from './global-insights-tab2.component';

describe('GlobalInsightsTab2Component', () => {
  let component: GlobalInsightsTab2Component;
  let fixture: ComponentFixture<GlobalInsightsTab2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalInsightsTab2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalInsightsTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
