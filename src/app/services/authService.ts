// authService.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login() {
    // Implementa la logica di login
    this.isLoggedInSubject.next(true);
  }

  logout() {
    // Implementa la logica di logout
    this.isLoggedInSubject.next(false);
  }
}
