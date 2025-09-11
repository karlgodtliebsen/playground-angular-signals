import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
  // Signal for the list of todos
  todos = signal<Todo[]>([
    { id: 1, text: 'Learn Angular Signals', completed: false },
    { id: 2, text: 'Build a demo app', completed: true },
    { id: 3, text: 'Master reactive programming', completed: false }
  ]);

  // Signal for new todo input
  newTodoText = signal('');

  // Computed signals for derived state
  completedCount = computed(() => 
    this.todos().filter(todo => todo.completed).length
  );

  pendingCount = computed(() => 
    this.todos().filter(todo => !todo.completed).length
  );

  totalCount = computed(() => this.todos().length);

  completionRate = computed(() => {
    const total = this.totalCount();
    return total > 0 ? Math.round((this.completedCount() / total) * 100) : 0;
  });

  filteredTodos = computed(() => {
    return this.todos();
  });

  addTodo() {
    const text = this.newTodoText().trim();
    if (text) {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false
      };
      this.todos.update(todos => [...todos, newTodo]);
      this.newTodoText.set('');
    }
  }

  toggleTodo(id: number) {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  deleteTodo(id: number) {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
  }

  clearCompleted() {
    this.todos.update(todos => todos.filter(todo => !todo.completed));
  }

  onNewTodoInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.newTodoText.set(target.value);
  }
}
