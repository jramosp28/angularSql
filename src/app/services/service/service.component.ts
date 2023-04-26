import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, throwError } from 'rxjs';
import { formMoto } from 'src/interfaces/interface';

@Injectable()
export class ServiceComponent {
  private objeto: formMoto[];
  private view$: Subject<formMoto[]>

  private urlLocal = "http://localhost:8080/user";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
    this.objeto = [];
    this.view$ = new BehaviorSubject<formMoto[]>([]);
  }
  formularios$():
    Observable<formMoto[]> {
    return this.view$.asObservable();
    console.log(this.view$.asObservable());
  }
  clientes(formulario: formMoto) {
    this.objeto.push(formulario);
    this.view$.next(this.objeto);
  }

  createEmployee(employee: formMoto): Observable<formMoto> {
    console.log(employee);
    return this.http.post<formMoto>(this.urlLocal, employee, this.httpOptions).pipe(
      catchError((error) => {
        console.error('Error creating employee: ', error);
        return throwError(() => new Error(error));
      })
    );
  }

  getLocalData(): Observable<formMoto> {
    return this.http.get<any>(this.urlLocal);
  }
}
