import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService';
import { DatiService } from 'src/app/services/dati.service';
import { ToggleMenuService } from 'src/app/services/toggle-menu.service';

@Component({
  selector: 'app-sezioniprincipali',
  templateUrl: './sezioniprincipali.component.html',
  styleUrls: ['./sezioniprincipali.component.css']
})
export class SezioniprincipaliComponent implements OnInit{
  dati: any[] = [];
  public name: string = 'Offerte';
  searchTerm: string = '';
  filteredDati: any[] = [];
  sezioneTrovata: any = null;



constructor(private datiService: DatiService, private router: Router,   private toggleMenuService: ToggleMenuService,    private authService: AuthService, ){}

  ngOnInit(): void {
    this.datiService.getDati().subscribe(
      (data) => {
        this.dati = data;
      },
      (error) => {
        console.log('errore', error);
      }
    );
  }
 
  logout() {
    this.authService.logout();
    this.toggleMenuService.resetMenuState(); // Aggiungi questo metodo se necessario
  }

  
  search() {
// Rimuovi gli spazi extra dal termine di ricerca
const cleanedSearchTerm = this.searchTerm.trim();

// Se il termine di ricerca è vuoto, mostra tutte le sezioni
if (cleanedSearchTerm === '') {
  this.sezioneTrovata = null;  // Resetta la sezione trovata
} else {
  // Trova la sezione corrispondente all'ID
  this.sezioneTrovata = this.dati.find((sezione) => sezione.id.toString() === cleanedSearchTerm);
}
}

navigaSezioniPrincipali(){
  this.router.navigate([ '/home']);
}

navigaSezioniSecondarie(){
  this.router.navigate([ '/sezionisecondarie']);
}

navigaSezioniExtra(){
  this.router.navigate(['/sezioniExtra']);
}

contatti(){
  this.router.navigate(['/contatti']);
}

// Nel tuo componente TypeScript (home.component.ts)
menuVisible: boolean = false;

toggleMenu(): void {
  const menu = document.getElementById("menu");
  const screenWidth = window.innerWidth;

  if (menu !== null) {
    if (screenWidth <= 1200) {
      this.menuVisible = !this.menuVisible;
      if (this.menuVisible) {
        menu.classList.add("menu-open");
      } else {
        menu.classList.remove("menu-open");
      }
    } else {
      // Se siamo sopra i 1200px, reimposta le voci del menu allo stato normale e nascondi il toggle
      this.menuVisible = false;
      menu.classList.remove("menu-open");
    }
  }
}


}

