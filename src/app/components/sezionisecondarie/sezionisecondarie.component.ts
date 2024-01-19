import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatiService } from 'src/app/services/dati.service';

@Component({
  selector: 'app-sezionisecondarie',
  templateUrl: './sezionisecondarie.component.html',
  styleUrls: ['./sezionisecondarie.component.css']
})
export class SezionisecondarieComponent implements OnInit{
  dati: any[] = [];
  public name: string = 'Offerte';
  searchTerm: string = '';
  filteredDati: any[] = [];
  sezioneTrovata: any = null;

  constructor(private datiService: DatiService, private router: Router){}

  ngOnInit(): void {
    this.datiService.getDati().subscribe((data) => {
      this.dati = data;
    },
    (error)=> {
      console.log('errore',error);
    })

}


logout(){
  this.router.navigate(['/home']);
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
