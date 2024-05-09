import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  IonTitle, IonToolbar, IonHeader, 
  IonMenu, IonContent, IonButtons, 
  IonMenuButton, IonList, IonItem, 
  IonLabel, IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    IonTitle, 
    IonToolbar, 
    IonHeader, 
    IonMenu, 
    IonContent, 
    IonButtons, 
    IonMenuButton, 
    IonList, 
    IonItem, 
    IonLabel, 
    IonButton,

    RouterLink
  ]
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
