import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { ButtonProvidersComponent } from 'src/app/components/button-providers/button-providers.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-options',
  templateUrl: './auth-options.page.html',
  styleUrls: ['./auth-options.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ButtonProvidersComponent, RouterLink]
})
export class AuthOptionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
