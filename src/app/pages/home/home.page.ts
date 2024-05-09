import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

import { ItemExplorerComponent } from 'src/app/components/item-explorer/item-explorer.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    ItemExplorerComponent, 
    MenuComponent],
})
export class HomePage {
  constructor() {}
}
