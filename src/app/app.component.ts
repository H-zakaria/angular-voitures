import { Component } from '@angular/core';
import { Voiture } from './Models/Voiture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'voitures';
  requestedDetails: Voiture = new Voiture('', '');
  detailsRequest(voiture: Voiture) {
    this.requestedDetails = voiture;
  }
}
