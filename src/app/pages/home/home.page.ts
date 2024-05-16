import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CustomInputComponent } from 'src/app/components/custom-input/custom-input.component';
import { FormControl } from '@angular/forms';

import { ItemExplorerComponent } from 'src/app/components/item-explorer/item-explorer.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    ItemExplorerComponent, 
    MenuComponent,
    SearchBarComponent,
    CustomInputComponent
  ],
})
export class HomePage {
  
}
