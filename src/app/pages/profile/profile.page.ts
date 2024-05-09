import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, 
  IonToolbar, IonCard, IonCardContent, 
  IonList, IonAvatar, IonLabel, IonItem, 
  IonButton, IonButtons, IonMenuButton} from '@ionic/angular/standalone';

import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    MenuComponent,
    IonButton, 
    IonItem, 
    IonLabel, 
    IonAvatar, 
    IonList, 
    IonCardContent, 
    IonCard, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonMenuButton]
})
export class ProfilePage implements OnInit {

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}
