import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalShowcase } from './components/signal-showcase/signal-showcase';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalShowcase],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular Signals Playground');
}
