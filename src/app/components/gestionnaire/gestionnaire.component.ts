import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Voiture } from 'src/app/Models/Voiture';
import { VoitureService } from 'src/app/Services/VoitureService';

@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.css'],
})
export class GestionnaireComponent implements OnInit {
  marque: string = '';
  modele: string = '';
  constructor(private voitureService: VoitureService) {}

  ngOnInit(): void {}

  ajouterVoiture() {
    this.voitureService.ajouterVoiture(new Voiture(this.marque, this.modele));
  }
}
