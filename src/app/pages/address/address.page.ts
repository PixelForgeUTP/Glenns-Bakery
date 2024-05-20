import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
} from '@ionic/angular/standalone';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { CardButtonAddressComponent } from 'src/app/components/card-button-address/card-button-address.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    MenuComponent,
    CardButtonAddressComponent
  ]
})
export class AddressPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
