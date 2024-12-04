import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalInsightsComponent } from './global-insights.component';

describe('GlobalInsightsComponent', () => {
  let component: GlobalInsightsComponent;
  let fixture: ComponentFixture<GlobalInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalInsightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
