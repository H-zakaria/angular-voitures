import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Voiture } from '../Models/Voiture';

@Injectable()
export class VoitureService {
  voitures: Array<Voiture> = [
    new Voiture('BMW', 'serie1'),
    new Voiture('Opel', 'corsa'),
    new Voiture('Ford', 'fiesta'),
  ];
  constructor(private router: Router,private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params));
  }
  voitureDetails:Voiture = new Voiture('','');
  
  
  ajouterVoiture(voiture: Voiture) {
    this.voitures.push(voiture);
  }
  showDetails(voiture:Voiture){
   this.voitureDetails = voiture;
   const marque = this.voitureDetails.marque;
   this.router.navigate(['/voitures/'+marque])
  }

}
