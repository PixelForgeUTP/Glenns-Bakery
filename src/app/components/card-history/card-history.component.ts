import { Component, OnInit } from '@angular/core';
import { 
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent, 
  IonCol, 
  IonGrid, 
  IonRow, 
  IonText, } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-card-history',
  templateUrl: './card-history.component.html',
  styleUrls: ['./card-history.component.scss'],
  imports: [
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonCol, 
  IonGrid, 
  IonRow, 
  IonText,
  ],
})
export class CardHistoryComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
