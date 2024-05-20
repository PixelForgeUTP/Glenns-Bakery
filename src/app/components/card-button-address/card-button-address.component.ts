import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton, IonActionSheet } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-card-button-address',
  templateUrl: './card-button-address.component.html',
  styleUrls: ['./card-button-address.component.scss'],
  imports: [IonActionSheet, IonButton, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent 
  ]
})
export class CardButtonAddressComponent   {

  constructor(private router: Router) { }

  addAddress() {
    this.router.navigate(['/address-add']);
  }

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

}
