import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './components/select/select.component';
import { HomeComponent } from './components/home/home.component';
import { SezioniprincipaliComponent } from './components/sezioniprincipali/sezioniprincipali.component';
import { SezionisecondarieComponent } from './components/sezionisecondarie/sezionisecondarie.component';
import { SezioniextraComponent } from './components/sezioniextra/sezioniextra.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';

const routes: Routes = [
  {path: 'select', component: SelectComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sezioniprincipali', component: SezioniprincipaliComponent},
  {path: 'sezionisecondarie', component: SezionisecondarieComponent},
  {path: 'sezioniextra', component: SezioniextraComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: '', component: HomeComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'cookie-policy', component: CookiePolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
