import { Component, OnInit } from "@angular/core";
import { Packer } from "docx";
import { saveAs } from "file-saver";

import { name1, name10, name11, name12, name13, name14, name15, name16, name17, name18, name19, name2, name20, name21, name22, name23, name24, name3, name4, name5, name6, name7, name8, name9, object1, object2, object3, sezione1, sezione2, sezione3, sezione4, sezione5, sezione6, sezione7, sezione8, } from "../../sezioni-data";
import { DocumentCreator } from "../../base-generator";

import { DatiService } from "../../services/dati.service";
import { JsonDataService } from "../../services/json-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  jsonData: any[] = [];
  visible: boolean = false;
  dati: any[] = [];
  showContents: boolean = false;
  allContents: any[] = [];
  showContents2: boolean = false;
  allContents2: any[] = [];
  
  constructor(private datiService: DatiService, private jsonDataService: JsonDataService, private router: Router) {}

  ngOnInit(): void {
  this.datiService.getDati().subscribe(
    (data) => {
      this.dati = data;
    },
    (error) => {
      console.error('Errore nel caricamento dei dati', error);
    }
  );
  }

  name = "Offerte";

  Mostra(): void{
     // Se i contenuti sono visibili, nascondili, altrimenti mostrali
  this.showContents = !this.showContents;

  // Se i contenuti sono nascosti, svuota l'array allContents
  if (!this.showContents) {
    this.allContents = [];
  } else {
    // Altrimenti, aggiungi tutti i contenuti di object e name all'array allContents
    this.allContents = [...name1, ...name2, ...name3,...name4, ...name5, ...name6,...name7, ...name8, ...name9,...name10, ...name11, ...name12,...name13, ...name14, ...name15,...name16, ...name17, ...name18,...name19, ...name20, ...name21,...name22, ...name23, ...name24,];
  }

  if(this.showContents2){
    this.showContents2 = false;
  }
  
}

Mostra2(): void{
this.showContents2 = !this.showContents2;

if (!this.showContents2) {
  this.allContents2 = [];
} else {
  this.allContents2 = [...object1, ...object2, ...object3];
}
if(this.showContents){
  this.showContents = false;
}
}

navigaSezioniPrincipali(){
  this.router.navigate([ '/home']);
}

navigaSezioniSecondarie(){
  this.router.navigate([ '/sezionisecondarie']);
}

navigaSezioniExtra(){
  this.router.navigate(['/sezioniprincipali']);
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