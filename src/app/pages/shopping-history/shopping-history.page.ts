import { Component, OnInit } from '@angular/core';
import { CardHistoryComponent } from 'src/app/components/card-history/card-history.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';

import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.page.html',
  styleUrls: ['./shopping-history.page.scss'],
  standalone: true,
  imports: [
    IonButton, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    CardHistoryComponent,
    MenuComponent 
  ]
})
export class ShoppingHistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
