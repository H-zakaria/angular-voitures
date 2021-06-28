import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GestionnaireComponent } from './components/gestionnaire/gestionnaire.component';
import { GarageComponent } from './components/garage/garage.component';
import { VoitureComponent } from './components/garage/voiture/voiture.component';
import { VoitureService } from './Services/VoitureService';
import { DetailsVoitureComponent } from './components/details-voiture/details-voiture.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: GarageComponent },
  { path: 'voitures/:marque', component: DetailsVoitureComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    GestionnaireComponent,
    GarageComponent,
    VoitureComponent,
    DetailsVoitureComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [VoitureService],
  bootstrap: [AppComponent],
})
export class AppModule {}
