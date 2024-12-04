import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verbi1Component } from './verbi1.component';

describe('Verbi1Component', () => {
  let component: Verbi1Component;
  let fixture: ComponentFixture<Verbi1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Verbi1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Verbi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
