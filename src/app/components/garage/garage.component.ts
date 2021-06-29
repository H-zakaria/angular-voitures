import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Voiture } from 'src/app/Models/Voiture';
import { VoitureService } from 'src/app/Services/VoitureService';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css'],
})
export class GarageComponent implements OnInit {
  voitures: Array<Voiture> = [];

  constructor(private voitureService: VoitureService) {}

  ngOnInit(): void {
    this.voitures = this.voitureService.voitures;
  }

}
