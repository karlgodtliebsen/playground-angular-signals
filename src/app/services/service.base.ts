// base-api.service.ts
import { HttpClient, HttpErrorResponse, httpResource } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError, of } from 'rxjs';
import { ErrorDialogComponent } from '../components/error-dialog.component';

export abstract class BaseApiService {
  protected constructor(protected http: HttpClient, protected dialog: MatDialog) {}

  protected handleError<T>(error: HttpErrorResponse, fallbackValue: T): Observable<T> {
    if (error.status === 404) {
      return of(fallbackValue);
    }

    const message = error.message || 'Unknown error occurred';
    this.dialog.open(ErrorDialogComponent, {
      data: { message },
    });

    return throwError(() => new Error(message));
  }
  protected getEmptyResponse<T>() {
    return httpResource<T>(() => ({
      url: ``,
      method: 'GET',
      body: { defaultValue: null },
    }));
  }
}
