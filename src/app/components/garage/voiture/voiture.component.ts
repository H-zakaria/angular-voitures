import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Voiture } from 'src/app/Models/Voiture';
import { VoitureService } from 'src/app/Services/VoitureService';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css'],
})
export class VoitureComponent implements OnInit {
  @Input() voiture: Voiture = new Voiture('', '');

  constructor(private voitureService: VoitureService) {}
  ngOnInit(): void {}
  
  showDetails() {
    this.voitureService.showDetails(this.voiture)
  }
}
