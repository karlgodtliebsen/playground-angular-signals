
# playground-angular-signals

## Plan:

- Get 100% on top of using signals to replace akita and ngstore
- Update to date on testing 
=======
# Angular Signals Playground

A comprehensive demonstration of Angular Signals featuring the latest Angular 20.3.0 capabilities and modern reactive programming patterns.

![Angular Signals Overview](https://github.com/user-attachments/assets/95e31347-8bd5-4dd8-b6d0-699c96738c4b)

## 🚀 Features

### Interactive Signal Demos
- **Counter Demo**: Basic signals, computed values, and effects
- **Todo List Demo**: Complex state management with signals
- **API Reference**: Complete signal API documentation

### Latest Angular Features
- **Angular 20.3.0** with latest Signals API
- **Standalone Components** architecture
- **New Control Flow** syntax (`@if`, `@for`)
- **Modern Testing** with Karma + Jasmine

## 🛠️ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

Visit `http://localhost:4200` to explore the playground.

## 📚 What You'll Learn

### Signal Fundamentals
- Creating writable signals with `signal()`
- Computed signals for derived state
- Effects for side effects
- Signal updates with `set()` and `update()`

### Advanced Patterns
- Complex object arrays as signals
- Reactive statistics and computed values
- Immutable state updates
- Signal-based form handling

### Modern Angular
- Standalone component architecture
- New control flow syntax
- Latest testing patterns
- Performance optimizations

## 🎯 Demo Components

### Counter Demo
![Counter Demo](https://github.com/user-attachments/assets/95e31347-8bd5-4dd8-b6d0-699c96738c4b)

Demonstrates:
- Basic signal operations
- Computed signal derivations
- Effect side effects
- Real-time reactivity

### Todo List Demo
![Todo List Demo](https://github.com/user-attachments/assets/133d8625-b951-47a1-85d4-ddfc3fcc22ea)

Features:
- Signal-based todo management
- Real-time statistics
- Interactive CRUD operations
- Progress tracking

## 🧪 Testing

The project includes comprehensive testing for all signal functionality:

```bash
npm test
```

All components are tested with:
- Signal state changes
- Computed value updates
- Effect executions
- User interactions

## 🏗️ Architecture

```
src/
├── app/
│   ├── components/
│   │   ├── counter/              # Signal counter demo
│   │   ├── todo-list/            # Signal todo list demo
│   │   └── signal-showcase/      # Main showcase component
│   ├── app.ts                    # Root component
│   └── app.config.ts             # App configuration
├── main.ts                       # Bootstrap
└── index.html                    # App shell
```

## 🔧 Technologies

- **Angular 20.3.0** - Latest stable version
- **TypeScript 5.9.2** - Type safety
- **SCSS** - Styling
- **Karma + Jasmine** - Testing
- **Angular CLI** - Development tools

## 📖 Signal API Reference

### Creating Signals
```typescript
import { signal, computed, effect } from '@angular/core';

// Writable signal
const count = signal(0);

// Computed signal
const doubled = computed(() => count() * 2);

// Effect
effect(() => console.log('Count:', count()));
```

### Updating Signals
```typescript
// Direct assignment
count.set(5);

// Functional update
count.update(value => value + 1);
```

### Reading Signals
```typescript
// Get current value
const currentValue = count();

// Use in templates
{{ count() }}
```

## 🎨 Styling

The application features:
- Responsive design
- Modern UI components
- Interactive animations
- Clean, professional styling

## 🚦 Getting Started

1. Clone the repository
2. Run `npm install`
3. Start with `npm start`
4. Explore the three demo sections
5. Check the console for signal effects
6. Experiment with the interactive features

## 🤝 Contributing

This is a playground for learning Angular Signals. Feel free to:
- Add new signal examples
- Improve the documentation
- Enhance the UI/UX
- Add more test cases

## 📄 License

MIT License - feel free to use this code for learning and experimentation.
