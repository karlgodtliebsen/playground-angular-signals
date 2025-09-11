import { Component, signal, computed, effect } from '@angular/core';
import { Counter } from '../counter/counter';
import { TodoList } from '../todo-list/todo-list';

@Component({
  selector: 'app-signal-showcase',
  imports: [Counter, TodoList],
  templateUrl: './signal-showcase.html',
  styleUrl: './signal-showcase.scss'
})
export class SignalShowcase {
  // Signal for current view
  currentView = signal<'overview' | 'counter' | 'todo-list'>('overview');
  
  // Signal for demonstration purposes
  demonstrationValue = signal(42);
  
  // Computed signal showing transformation
  transformedValue = computed(() => {
    const value = this.demonstrationValue();
    return {
      doubled: value * 2,
      squared: value * value,
      formatted: `The value is ${value}`,
      isEven: value % 2 === 0
    };
  });

  constructor() {
    // Effect to demonstrate side effects
    effect(() => {
      console.log('Current view changed to:', this.currentView());
    });
  }

  setView(view: 'overview' | 'counter' | 'todo-list') {
    this.currentView.set(view);
  }

  updateDemonstrationValue(delta: number) {
    this.demonstrationValue.update(current => current + delta);
  }

  resetDemonstrationValue() {
    this.demonstrationValue.set(42);
  }
}
