import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Voiture } from 'src/app/Models/Voiture';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css'],
})
export class VoitureComponent implements OnInit {
  @Input() voiture: Voiture = new Voiture('', '');

  constructor() {}
  ngOnInit(): void {}
  @Output()
  sendVoiture: EventEmitter<Voiture> = new EventEmitter();

  showDetails() {
    this.sendVoiture.emit(this.voiture);
  }
}
