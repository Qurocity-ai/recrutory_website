import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbiDemoComponent } from './verbi-demo.component';

describe('VerbiDemoComponent', () => {
  let component: VerbiDemoComponent;
  let fixture: ComponentFixture<VerbiDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerbiDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerbiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
