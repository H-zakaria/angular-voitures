import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/Models/Voiture';
import { VoitureService } from 'src/app/Services/VoitureService';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-voiture',
  templateUrl: './details-voiture.component.html',
  styleUrls: ['./details-voiture.component.css']
})
export class DetailsVoitureComponent implements OnInit {
  requestedVoiture: Voiture = new Voiture('','');

  constructor(private voitureService: VoitureService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params) );
  }
  
  ngOnInit(): void {
    this.requestedVoiture = this.voitureService.voitureDetails;
  }
}
