import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  // Basic writable signal
  count = signal(0);
  
  // Computed signal that derives from count
  doubleCount = computed(() => this.count() * 2);
  
  // Computed signal for status message
  status = computed(() => {
    const value = this.count();
    if (value === 0) return 'Start counting!';
    if (value > 0) return 'Positive territory';
    return 'Negative territory';
  });

  constructor() {
    // Effect that logs count changes
    effect(() => {
      console.log(`Counter changed to: ${this.count()}`);
    });
  }

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }
}
