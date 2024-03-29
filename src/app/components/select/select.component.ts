// Nel tuo componente TypeScript (select.component.ts)
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Packer } from 'docx';
import * as saveAs from 'file-saver';
import { DocumentCreator } from 'src/app/base-generator';
import { name1, name10, name11, name12, name13, name14, name15, name16, name17, name18, name19, name2, name20, name21, name22, name23, name24, name3, name4, name5, name6, name7, name8, name9, object1, object10, object11, object12, object13, object2, object3,  object4, object5, object6,object7,object8,object9,sezione1, sezione2, sezione3, sezione4, sezione5, sezione6, sezione7, sezione8,  } from "../../sezioni-data";
import { DatiService } from 'src/app/services/dati.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface ObjectItem {
  name: string;
  included: boolean;
  isOpen: boolean;
  contenuto: string;
}

interface NameItem {
  name: string;
  isOpen: boolean;
  included: boolean;
  objects: ObjectItem[];
  contenuto: string;
}

interface Button {
  name: string;
  isOpen: boolean;
  included: boolean;
  names: NameItem[];
  
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  sezioneSelezionata!: string ;  
  dati!: any[] ; 

  includeSezione1: boolean = false;
  includeSezione2: boolean = false;
  includeSezione3: boolean = false;
  includeSezione4: boolean = false;
  includeSezione5: boolean = false;
  includeSezione6: boolean = false;
  includeSezione7: boolean = false;
  includeSezione8: boolean = false;
  selectAll: boolean = false;

  includiName1:boolean = false;
  includiName2:boolean = false;
  includiName3:boolean = false;
  includiName4:boolean = false;
  includiName5:boolean = false;
  includiName6:boolean = false;
  includiName7:boolean = false;
  includiName8:boolean = false;
  includiName9:boolean = false;
  includiName10:boolean = false;
  includiName11:boolean = false;
  includiName12:boolean = false;
  includiName13:boolean = false;
  includiName14:boolean = false;
  includiName15:boolean = false;
  includiName16:boolean = false;
  includiName17:boolean = false;
  includiName18:boolean = false;
  includiName19:boolean = false;
  includiName20:boolean = false;
  includiName21:boolean = false;
  includiName22:boolean = false;
  includiName23:boolean = false;
  includiName24:boolean = false;
  includiObject1:boolean = false;
  includiObject2:boolean = false;
  includiObject3:boolean = false;
  includiObject4:boolean = false;
  includiObject5:boolean = false;
  includiObject6:boolean = false;
  includiObject7:boolean = false;
  includiObject8:boolean = false;
  includiObject9:boolean = false;
  includiObject10:boolean = false;
  includiObject11:boolean = false;
  includiObject12:boolean = false;
  includiObject13:boolean = false;

  showCheckboxes = false;
  showMore = false;


  showName1 = true;
  showName2 = false;
  showName3 = false;
  showName4 = false;
  showName5 = false;
  showName6 = false;
  showName7 = false;
  showName8 = false;

  showOggetto1 = false;
  showOggetto2= false;
  showOggetto3 = false;
  showOggetto4= false;
  showOggetto5 = false;
  showOggetto6= false;
  showOggetto7 = false;
  showOggetto8= false;
  showOggetto9 = false;
  showOggetto10= false;
  showOggetto11= false;
  showOggetto12= false;
  showOggetto13 = false;
  showOggetto14= false;
  showOggetto15 = false;
  showOggetto16= false;
  showOggetto17 = false;
  showOggetto18= false;
  showOggetto19 = false;
  showOggetto20= false;
  showOggetto21 = false;
  showOggetto22= false;
  showOggetto23 = false;
  showOggetto24= false;
 
  inclusions: boolean[] = [];
 
  buttons: Button[] = [
    {
      name: '1.2. METODOLOGIA DI INTERVENTO',
      isOpen: false,
      included: false,
      names: [
        { name: 'PREMESSA', isOpen: false, included: false,contenuto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com-modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paria-tur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', objects: [] },
        { name: 'ANALISI FUNZIONALE', isOpen: false, included: false,contenuto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com-modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paria-tur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', objects: [{ name: 'IDENTIFICAZIONE E ANALISI DEI REQUISITI',  isOpen: false,contenuto: 'prova2',included: false }, { name: 'ANALISI TECNICA',isOpen: false,contenuto: 'prova', included: false }, { name: 'PIATTAFORMA TECNOLOGICA',isOpen: false,contenuto: 'prova', included: false }] },
        { name: 'PROGETTAZIONE', isOpen: false, included: false,contenuto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com-modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paria-tur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', objects: [{ name: 'ARCHITETTURA DELL’INFORMAZIONE',  isOpen: false,contenuto: 'prova3',included: false }, { name: 'MULTI-PAGINA',isOpen: false,contenuto: 'prova', included: false }, { name: 'PROGETTAZIONE TEMPLATE',isOpen: false,contenuto: 'prova', included: false }] }
      ]
    },
    {
      name: '1.3. TEMPI DI CONSEGNA',
      isOpen: false,
      included: false,
      names: [
        { name: 'TEMPI DI CONSEGNA', isOpen: false,  included: false,contenuto: 'prova', objects: [] },
      
      ]
    },
    {
      name:   ' 1.4. CONDIVISIONE MATERIALE',
      isOpen: false,
      included: false,
      names: [
        { name: 'LINGUE', isOpen: false, included: false,contenuto: 'prova',  objects: [] },
      ]
    },
    {
      name: '2.1. CORPORATE WEBSITE USABILITY ANALYSIS',
      isOpen: false,
      included: false,
      names: [
        { name: 'SEO / SEM', isOpen: false,  included: false,contenuto: 'prova', objects: [{ name: 'STRUTTURA E CONTENUTI ESISTENTI',isOpen: false,contenuto: 'prova', included: false }, { name: 'KEYWORD DI BUSINESS: ANALISI A CAMPIONE',isOpen: false,contenuto: 'prova', included: false }, ] },
        { name: 'MESSAGGIO', isOpen: false,  included: false,contenuto: 'prova', objects: [{ name: 'ARCHITETTURA DELL’INFORMAZIONE',isOpen: false,contenuto: 'prova', included: false }, ] },
        { name: 'INFRASTRUTTURA IT', isOpen: false,  included: false,contenuto: 'prova', objects: [{ name: 'ANALYTICS',isOpen: false,contenuto: 'prova', included: false }, { name: 'DOMINI E LOCALIZZAZIONE',isOpen: false,contenuto: 'prova', included: false }, { name: 'HOSTING',isOpen: false,contenuto: 'prova', included: false }] }
      ]
    },
    {
      name: '2.2. MAPPATURA KEYWORD DI BUSINESS',
      isOpen: false,
      included: false,
      names: [
        { name: 'MAPPATURA KEYWORD DI BUSINESS', isOpen: false,  included: false,contenuto: 'prova', objects: [] },
        
      ]
    },
    {
      name: '2.3. WEBSITE SEO ANALYSIS',
      isOpen: false,
      included: false,
      names: [
        { name: 'MAPPATURA KEYWORD DI BUSINESS', isOpen: false,  included: false,contenuto: 'prova', objects: [] },
        { name: 'ANALISI TEMPLATE IN OTTICA SEO', isOpen: false,  included: false,contenuto: 'prova', objects: []},
        { name: 'ANALISI STRUTTURA HTML IN OTTICA SEO', isOpen: false,  included: false,contenuto: 'prova', objects: [{ name: 'ANALISI KEYWORDS (BRAND E PRODOTTI)',isOpen: false,contenuto: 'prova', included: false }] }
      ]
    },
    {
      name: '2.4. SEARCH ENGINE POSITIONING START-UP (SEP)',
      included: false,
      isOpen: false,
      names: [
        { name: 'SEARCH ENGINE POSITIONING START-UP (SEP)', isOpen: false, included: false,contenuto: 'prova', objects:[]   },
      
      ]
    },
    {
      name: '2.5. CONTINUOUS SEARCH ENGINE POSITIONING (SEP)',
      included: false,
      isOpen: false,
      names: [
        { name: 'CONTINUOUS SEARCH ENGINE POSITIONING (SEP)', isOpen: false, included: false,contenuto: 'prova', objects:[]   },
      ]
    },
    
  ];

  idCliccato!: any;
  sections: any[] = [];
  names: any[] = [];
  objects: any[] = [];
  contenuti2: string[] = [];

  
  
  currentButton: any;
  currentName: any;
  currentContent2: any;
  nuovoContenuto: string = '';
  contenuti: string[] = [];

  constructor(private datiService: DatiService, private route: ActivatedRoute, private http: HttpClient, private changeDetectorRef: ChangeDetectorRef){ }


  ngOnInit(): void {
    // Carica i dati dal file JSON utilizzando HttpClient
    this.http.get('./assets/sezioni.json').subscribe((data: any) => {
      // Assicurati che 'data' sia un array di oggetti
      if (Array.isArray(data)) {
        // Inizializza le variabili qui
        const defaultButton = this.buttons[0]; // Assumendo che il tuo array di buttons abbia almeno un elemento
  
        // Imposta il pulsante "name 1" come aperto di default
        defaultButton.isOpen = true;
  
        // Ottieni il primo elemento del primo array di nomi (nameItem)
        const defaultName = defaultButton.names[0]; // Assumendo che l'array names abbia almeno un elemento
  
        // Imposta il nome predefinito come aperto
        defaultName.isOpen = true;
  
        // Filtra gli oggetti che hanno l'id 'Name 1'
        const name1Data = data.filter(item => item.id === 'PREMESSA');
  
        // Verifica che esista almeno un oggetto con id 'Name 1'
        if (name1Data.length > 0) {
          const name1Item = name1Data[0];
  
          // Carica i dati associati al nome predefinito
          this.caricaDati(name1Item);
        } else {
          console.error("Errore: Nessun oggetto trovato con id 'Name 1'");
        }
      }
       // Carica i dati dal localStorage all'inizio
    const storedContenutoCompleto = localStorage.getItem('contenutoCompleto');
    const storedContenuti = localStorage.getItem('contenuti');

    if (storedContenutoCompleto) {
      this.currentContent.contenutoCompleto = storedContenutoCompleto;
    }

    if (storedContenuti) {
      this.contenuti = JSON.parse(storedContenuti);
    }
    });

    const savedData = localStorage.getItem('contenuti');
  if (savedData) {
    this.contenuti = JSON.parse(savedData);
  }

  
  }
  
  
  toggleButton(button: Button) {
    this.buttons.forEach(b => {
      if (b !== button) {
        b.isOpen = false;
      }
    });
    button.isOpen = !button.isOpen;
  }

  toggleName(nameItem: NameItem, button: Button, objectItem?: ObjectItem) {
    nameItem.isOpen = !nameItem.isOpen;
  
    if (objectItem) {
      objectItem.isOpen = !objectItem.isOpen;
    } else {
      // Se non hai specificato un oggetto, puoi eseguire altre azioni qui
      // Ad esempio, puoi gestire l'apertura/chiusura di tutti gli oggetti associati a nameItem
      button.names.forEach(item => {
        if (item !== nameItem) {
          item.isOpen = false;
        }
      });
    }
  }
  
  
  handleObjectClick(objectItem: ObjectItem) {
    alert("Hai cliccato su: " + objectItem.name);
    // Aggiungi l'azione desiderata qui per gli oggetti
  }

  ScegliSottoSezione(){
    this.showCheckboxes = !this.showCheckboxes;

    if(this.showMore){
      this.showMore = false;
    }
  }

  MoreOggetti(){
    this.showMore = !this.showMore;
  }

  Vai(button: Button, nameItem?: NameItem, objectItem?: ObjectItem) {
    // Carica i dati dal file JSON utilizzando HttpClient
    this.http.get('./assets/sezioni.json').subscribe((data: any) => {
      // Assicurati che 'data' sia un array di oggetti
      if (Array.isArray(data)) {
        let selectedItemData;
  
        // Cerca in base all'oggetto specificato
        if (objectItem) {
          selectedItemData = data.find(obj => obj.id === objectItem.name);
        } else if (nameItem) {
          // Cerca in base al nome specificato
          selectedItemData = data.find(obj => obj.id === nameItem.name);
        } else {
          // Se non specificato, cerca in base al pulsante
          selectedItemData = data.find(obj => obj.id === button.name);
        }
  
        // Se l'oggetto è stato trovato, imposta il contenuto corrente
        if (selectedItemData) {
          this.caricaDati(selectedItemData);
        } else {
          // Gestisci il caso in cui l'oggetto non è stato trovato
          console.error("Errore: Nessun oggetto trovato");
          this.currentContent = { title: 'N/A', contenutoCompleto: 'N/A' , contenuto2: 'N/A'};
        }
      }
        if (nameItem && !objectItem) {
    this.toggleName(nameItem, button);
  }
    });
  }
  
  
  
  
  caricaDati(nameItem: any) {
    // Assicurati che nameItem contenga un oggetto valido
    if (nameItem && nameItem.hasOwnProperty('title')) {
      if (nameItem.hasOwnProperty('contenutoCompleto')) {
        this.currentContent = { title: nameItem.title, contenutoCompleto: nameItem.contenutoCompleto , contenuto2: nameItem.contenuto2};
      } else if (nameItem.hasOwnProperty('contenuto')) {
        this.currentContent = { title: nameItem.title, contenutoCompleto: nameItem.contenuto, contenuto2: nameItem.contenuto2 };
      } else if (nameItem.hasOwnProperty('contenuto2')) {
        this.currentContent = { title: nameItem.title, contenutoCompleto: nameItem.contenuto, contenuto2: nameItem.contenuto2 };
      }
      else {
        // Gestisci altri casi se necessario
        this.currentContent = { title: 'N/A', contenutoCompleto: 'N/A', contenuto2: 'N/A' };
      }
    } else {
      // Gestisci altri casi se necessario
      this.currentContent = { title: 'N/A', contenutoCompleto: 'N/A', contenuto2: 'N/A' };
    }
  }
  

name1(){
  this.showName1 = !this.showName1;
}

name2(){
  this.showName2 = !this.showName2;
}
 
name3(){
  this.showName3 = !this.showName3;
}
 
name4(){
  this.showName4 = !this.showName4;
}
 
name5(){
  this.showName5 = !this.showName5;
}
 
name6(){
  this.showName6 = !this.showName6;
}
 
name7(){
  this.showName7= !this.showName7;
}
 
name8(){
  this.showName8 = !this.showName8;
}
 
oggetto1(){
  this.showOggetto1 = !this.showOggetto1;
}

oggetto2(){
  this.showOggetto2 = !this.showOggetto2;
}

oggetto3(){
  this.showOggetto3 = !this.showOggetto3;
}

oggetto4(){
  this.showOggetto4 = !this.showOggetto4;
}
oggetto5(){
  this.showOggetto5= !this.showOggetto5;
}

oggetto6(){
  this.showOggetto6= !this.showOggetto6;
}
oggetto7(){
  this.showOggetto7 = !this.showOggetto7;
}

oggetto8(){
  this.showOggetto8 = !this.showOggetto8;
}
oggetto9(){
  this.showOggetto9 = !this.showOggetto9;
}

oggetto10(){
  this.showOggetto10 = !this.showOggetto10;
}
oggetto11(){
  this.showOggetto11 = !this.showOggetto11;
}

oggetto12(){
  this.showOggetto12 = !this.showOggetto12;
}
oggetto13(){
  this.showOggetto13 = !this.showOggetto13;
}

oggetto14(){
  this.showOggetto14 = !this.showOggetto14;
}
oggetto15(){
  this.showOggetto15 = !this.showOggetto15;
}

oggetto16(){
  this.showOggetto16 = !this.showOggetto16;
}
oggetto17(){
  this.showOggetto17 = !this.showOggetto17;
}

oggetto18(){
  this.showOggetto18 = !this.showOggetto18;
}
oggetto19(){
  this.showOggetto19 = !this.showOggetto19;
}

oggetto20(){
  this.showOggetto20 = !this.showOggetto20;
}
oggetto21(){
  this.showOggetto21 = !this.showOggetto21;
}

oggetto22(){
  this.showOggetto22 = !this.showOggetto22;
}
oggetto23(){
  this.showOggetto23 = !this.showOggetto23;
}

oggetto24(){
  this.showOggetto24 = !this.showOggetto24;
}

  selectAllSections(){

    this.includeSezione1 = this.selectAll;
    this.includeSezione2 = this.selectAll;
    this.includeSezione3 = this.selectAll;
    this.includeSezione4 = this.selectAll;
    this.includeSezione5 = this.selectAll;
    this.includeSezione6 = this.selectAll;
    this.includeSezione7 = this.selectAll;
    this.includeSezione8 = this.selectAll;
    this.includiName1 = this.selectAll;
    this.includiName2 = this.selectAll;
    this.includiName3 = this.selectAll;
    this.includiName4 = this.selectAll;
    this.includiName5 = this.selectAll;
    this.includiName6 = this.selectAll;
    this.includiName7 = this.selectAll;
    this.includiName8 = this.selectAll;
    this.includiName9 = this.selectAll;
    this.includiName10 = this.selectAll;
    this.includiName11 = this.selectAll;
    this.includiName12 = this.selectAll;
    this.includiName13 = this.selectAll;
    this.includiName14 = this.selectAll;
    this.includiName15 = this.selectAll;
    this.includiName16 = this.selectAll;
    this.includiName17 = this.selectAll;
    this.includiName18 = this.selectAll;
    this.includiName19 = this.selectAll;
    this.includiName20 = this.selectAll;
    this.includiName21 = this.selectAll;
    this.includiName22 = this.selectAll;
    this.includiName23 = this.selectAll;
    this.includiName24 = this.selectAll;
    this.includiObject1 = this.selectAll;
    this.includiObject2 = this.selectAll;
    this.includiObject3 = this.selectAll;
    this.includiObject4 = this.selectAll;
    this.includiObject5 = this.selectAll;
    this.includiObject6 = this.selectAll;
    this.includiObject7 = this.selectAll;
    this.includiObject8 = this.selectAll;
    this.includiObject9 = this.selectAll;
    this.includiObject10 = this.selectAll;
    this.includiObject11 = this.selectAll;
    this.includiObject12 = this.selectAll;
    this.includiObject13 = this.selectAll;
    this.buttons.forEach(button => {
      button.names.forEach(nameItem => {
        nameItem.included = this.selectAll;
     
        nameItem.objects.forEach(objectItem => {
          objectItem.included = this.selectAll;
        });
      });
})};

  public download(): void {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create(
      this.includeSezione1,
      this.includeSezione2,
      this.includeSezione3,
      this.includeSezione4,
      this.includeSezione5,
      this.includeSezione6,
      this.includeSezione7,
      this.includeSezione8,
      this.includiName1,
      this.includiName2,
      this.includiName3,
      this.includiName4,
      this.includiName5,
      this.includiName6,
      this.includiName7,
      this.includiName8,
      this.includiName9,
      this.includiName10,
      this.includiName11,
      this.includiName12,
      this.includiName13,
      this.includiName14,
      this.includiName15,
      this.includiName16,
      this.includiName17,
      this.includiName18,
      this.includiName19,
      this.includiName20,
      this.includiName21,
      this.includiName22,
      this.includiName23,
      this.includiName24,
      this.includiObject1,
      this.includiObject2,
      this.includiObject3,
      this.includiObject4,
      this.includiObject5,
      this.includiObject6,
      this.includiObject7,
      this.includiObject8,
      this.includiObject9,
      this.includiObject10,
      this.includiObject11,
      this.includiObject12,
      this.includiObject13,
      object1,
      object2,
      object3,
      object4,
      object5,
      object6,
      object7,
      object8,
      object9,
      object10,
      object11,
      object12,
      object13,
      name1,
      name2,
      name3,
      name4,
      name5,
      name6,
      name7,
      name8,
      name9,
      name10,
      name11,
      name12,
      name13,
      name14,
      name15,
      name16,
      name17,
      name18,
      name19,
      name20,
      name21,
      name22,
      name23,
      name24,
      sezione1,
      sezione2,
      sezione3,
      sezione4,
      sezione5,
      sezione6,
      sezione7,
      sezione8
    );

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }


  
  @Input() currentContent: any = { ...name1[0] }; 
  @Output() contenutoAggiunto = new EventEmitter<string>();

  aggiungiContenuto() {
    this.currentContent.contenutoCompleto += ' ' + this.nuovoContenuto;
    this.contenuti.push(this.nuovoContenuto);
    this.contenutoAggiunto.emit(this.nuovoContenuto);
    
    this.nuovoContenuto = '';
  
    // Salva i dati aggiornati nel localStorage
    this.salvaDatiNelLocalStorage();
  
    // Forza l'aggiornamento della vista
    this.changeDetectorRef.detectChanges();
  }

  rimuoviContenuto(index: number) {
    const contenutoRimosso = this.contenuti.splice(index, 1)[0];
    this.currentContent.contenutoCompleto = this.currentContent.contenutoCompleto.replace(contenutoRimosso, '');
    this.currentContent.contenutoCompleto = this.currentContent.contenutoCompleto.trim();

    // Salva i dati aggiornati nel localStorage
    this.salvaDatiNelLocalStorage();

    // Forza l'aggiornamento della vista
    this.changeDetectorRef.detectChanges();
  }

  private salvaDatiNelLocalStorage() {
    localStorage.setItem('contenutoCompleto', this.currentContent.contenutoCompleto);
    localStorage.setItem('contenuti', JSON.stringify(this.contenuti));
  }
  
  
}
