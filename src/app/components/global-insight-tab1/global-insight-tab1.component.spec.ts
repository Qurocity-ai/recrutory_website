import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalInsightTab1Component } from './global-insight-tab1.component';

describe('GlobalInsightTab1Component', () => {
  let component: GlobalInsightTab1Component;
  let fixture: ComponentFixture<GlobalInsightTab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalInsightTab1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalInsightTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
