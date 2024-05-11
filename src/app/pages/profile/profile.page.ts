import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  IonList, 
  IonAvatar, 
  IonLabel, 
  IonItem, 
  IonButton, 
  IonButtons, 
  IonMenuButton
} from '@ionic/angular/standalone';

import { MenuComponent } from '../../components/menu/menu.component';
import { AuthService } from 'src/app/services/auth.service';

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
export class ProfilePage {

  private authservice = inject(AuthService);
  private _router = inject(Router);

  async logOut(): Promise<void> {
    try {
      await this.authservice.logOut();
      this._router.navigate(['/auth']);
    } catch (error) {
      console.log(error)
    }
  }

}
