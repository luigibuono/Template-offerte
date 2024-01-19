import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
    jsonUrl = './assets/sezioni.json';

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}

