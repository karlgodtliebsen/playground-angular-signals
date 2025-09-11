import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalShowcase } from './signal-showcase';

describe('SignalShowcase', () => {
  let component: SignalShowcase;
  let fixture: ComponentFixture<SignalShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalShowcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalShowcase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
