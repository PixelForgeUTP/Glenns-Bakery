import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonList, IonAvatar, IonLabel, IonItem, IonButton, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

import { MenuComponent } from '../../components/menu/menu.component';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

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
export class ProfilePage implements OnInit {

  private authservice = inject(AuthService);
  private _router = inject(Router);
  private _snackBar = inject(MatSnackBar);
  private profileService = inject(ProfileService);
  
  profileData: any = {};

  ngOnInit() {
    this.loadUserProfile();
  }

  async loadUserProfile() {
    try {
      this.profileService.getUserProfile().subscribe((profileDataArray) => {
        if (profileDataArray && profileDataArray.length > 0) {
          this.profileData = profileDataArray[0];
        } else {
          console.error('No profile data found or user is not authenticated.');
        }
      });
    } catch (error) {
      console.error('Error loading profile data:', error);
    }
  }

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

  address() {
    this._router.navigate(['/address'])
  }

  fill() {
    this._router.navigate(['/fill-profile'])
  }
}
