import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, IonButton } from '@ionic/angular/standalone';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { CustomInputComponent } from 'src/app/components/custom-input/custom-input.component';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.page.html',
  styleUrls: ['./address-add.page.scss'],
  standalone: true,
  imports: [IonButton, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    MenuComponent,
    CustomInputComponent
  ]
})
export class AddressAddPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
