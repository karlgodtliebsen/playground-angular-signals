import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
  WritableSignal,
} from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  MatCalendarCellClassFunction,
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignalState } from '../../services/signal-state';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
const day = today.getDay();

@Component({
  selector: 'app-date-picker',
  providers: [provideNativeDateAdapter()],
  encapsulation: ViewEncapsulation.None,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
  ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent {
  private sessionContext = inject(SignalState);
  readonly selectedDate: WritableSignal<Date | null> = this.sessionContext.selectedDateTime;

  onDateChange(event: MatDatepickerInputEvent<Date | null>) {
    const date = event.value ? new Date(event.value) : null;
    console.log('Selected date:', date);
    this.selectedDate.set(date);
    this.sessionContext.setSelectedDateTime(date);
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return date === today.getDate() ? 'custom-date-class' : '';
    }
    return '';
  };
}
