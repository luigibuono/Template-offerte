import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatiService {


  constructor(private http: HttpClient) { }

  datiUrl = './assets/sezioni.json';


  getDati(): Observable<any[]> {
    return this.http.get<any[]>(this.datiUrl);
  }

  getContenutoById(id :string): Observable<any> {
    return this.http.get<any[]>(this.datiUrl).pipe(
      map((contenuti: any[]) => contenuti.find(item => item.id === id)));
    }
  }

