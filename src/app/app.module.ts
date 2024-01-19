import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from  '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


import { HelloComponent } from './components/hello.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectComponent } from './components/select/select.component';
import { HomeComponent } from './components/home/home.component';
import { SezioniprincipaliComponent } from './components/sezioniprincipali/sezioniprincipali.component';
import { AppComponent } from './app.component';
import { SezionisecondarieComponent } from './components/sezionisecondarie/sezionisecondarie.component';
import { SezioniextraComponent } from './components/sezioniextra/sezioniextra.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { CookieSettingComponent } from './components/cookie-setting/cookie-setting.component';

@NgModule({
  declarations: [
    HelloComponent,
    FooterComponent,
    SelectComponent,
    AppComponent,
    HomeComponent,
    SezioniprincipaliComponent,
    SezionisecondarieComponent,
    SezioniextraComponent,
    ContattiComponent,
    PrivacyPolicyComponent,
    CookiePolicyComponent,
    CookieSettingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
