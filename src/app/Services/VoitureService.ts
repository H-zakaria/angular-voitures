import { Voiture } from '../Models/Voiture';

export class VoitureService {
  voitures: Array<Voiture> = [
    new Voiture('BMW', 'serie1'),
    new Voiture('Opel', 'corsa'),
    new Voiture('Ford', 'fiesta'),
  ];

  ajouterVoiture(voiture: Voiture) {
    this.voitures.push(voiture);
  }
}
