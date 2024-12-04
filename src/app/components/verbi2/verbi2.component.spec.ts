import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verbi2Component } from './verbi2.component';

describe('Verbi2Component', () => {
  let component: Verbi2Component;
  let fixture: ComponentFixture<Verbi2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Verbi2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Verbi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
