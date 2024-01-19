import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {

  private showMenuIconSubject = new BehaviorSubject<boolean>(false);
  showMenuIcon$ = this.showMenuIconSubject.asObservable();

  toggleMenu() {
    this.showMenuIconSubject.next(!this.showMenuIconSubject.value);
  }

  resetMenuState() {
    this.showMenuIconSubject.next(false);
  }

}
