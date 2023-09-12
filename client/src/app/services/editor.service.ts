import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  private readonly API_BASE_URL = 'http://localhost:5278';

  constructor(private http: HttpClient) { }

  sendEditorConent(editor_content: string): Observable<string> {
    const url = `${this.API_BASE_URL}/send`
    const body = { content: editor_content };

    return this.http.post<string>(url, body).pipe(
      tap((data: string) => {
        return data;
      }), 
      catchError(error => {
          console.error('Error occurred: ', error);
          // Re-throw the error
          return throwError(() => new Error('Backend is not responding.')); 
      })
    );
  }
}
