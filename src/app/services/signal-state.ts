import { Injectable, signal, computed } from '@angular/core';

export interface AppState {
  user: { name: string; email: string } | null;
  theme: 'light' | 'dark';
  notifications: Array<{ id: string; message: string; type: 'info' | 'success' | 'error' }>;
}

@Injectable({
  providedIn: 'root'
})
export class SignalState {
  // Private state signals
  private _user = signal<AppState['user']>(null);
  private _theme = signal<AppState['theme']>('light');
  private _notifications = signal<AppState['notifications']>([]);

  // Public readonly signals
  readonly user = this._user.asReadonly();
  readonly theme = this._theme.asReadonly();
  readonly notifications = this._notifications.asReadonly();

  // Computed signals
  readonly isLoggedIn = computed(() => this._user() !== null);
  readonly notificationCount = computed(() => this._notifications().length);
  readonly hasErrors = computed(() => 
    this._notifications().some(n => n.type === 'error')
  );

  // State update methods
  setUser(user: AppState['user']) {
    this._user.set(user);
    this.addNotification({
      id: Date.now().toString(),
      message: user ? `Welcome, ${user.name}!` : 'Logged out',
      type: 'info'
    });
  }

  toggleTheme() {
    this._theme.update(current => current === 'light' ? 'dark' : 'light');
  }

  addNotification(notification: Omit<AppState['notifications'][0], 'id'> & { id?: string }) {
    const newNotification = {
      id: notification.id || Date.now().toString(),
      ...notification
    };
    this._notifications.update(notifications => [...notifications, newNotification]);
  }

  removeNotification(id: string) {
    this._notifications.update(notifications => 
      notifications.filter(n => n.id !== id)
    );
  }

  clearAllNotifications() {
    this._notifications.set([]);
  }

  // Demo data methods
  loadDemoData() {
    this.setUser({ name: 'John Doe', email: 'john@example.com' });
    this.addNotification({
      message: 'Demo data loaded successfully',
      type: 'success'
    });
  }

  simulateError() {
    this.addNotification({
      message: 'This is a simulated error message',
      type: 'error'
    });
  }
}
