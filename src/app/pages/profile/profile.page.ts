import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
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
    IonMenuButton,
    MatSnackBarModule
  ]
})
export class ProfilePage {

  private authservice = inject(AuthService);
  private _router = inject(Router);
  private _snackBar = inject(MatSnackBar);

  async logOut(): Promise<void> {
    try {
      const snackBarRef = this.openSnackBar();
      await this.authservice.logOut();
      snackBarRef.afterDismissed().subscribe(() => {
        this._router.navigate(['/auth']);
      });
    } catch (error) {
      console.log(error)
    }
  }

  openSnackBar() {
    return this._snackBar.open('Ha cerrado sesión correctamente', 'Cerrar', {
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    })
  }

  history() {
    this._router.navigate(['/shopping-history'])
  }

}
