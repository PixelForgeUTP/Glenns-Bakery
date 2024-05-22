import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { ProfileService } from 'src/app/services/profile.service';
import { CustomInputComponent } from 'src/app/components/custom-input/custom-input.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fill-profile',
  templateUrl: './fill-profile.page.html',
  styleUrls: ['./fill-profile.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    CustomInputComponent,
    IonLabel,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MenuComponent
  ]
})
export class FillProfilePage implements OnInit {
  profileForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
  });

  constructor(private profileService: ProfileService,
              private _snackBar: MatSnackBar,
              private router: Router) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  async loadUserProfile() {
    const profileData = await this.profileService.getUserProfile().toPromise();
    console.log('Profile Data:', profileData); // Logging the profile data
    if (profileData && profileData.length > 0) {
      const userProfile = profileData[0];
      this.profileForm.patchValue(userProfile);
      console.log('Form Value:', this.profileForm.value); // Logging form value after patching
    } else {
      console.error('No profile data found or user is not authenticated.');
    }
  }

  async onSubmit() {
    console.log('Form Submitted', this.profileForm.value);
    if (this.profileForm.valid) {
      await this.profileService.updateUserProfile(this.profileForm.value);
      this.openSnackBar('Profile updated successfully');
      this.router.navigate(['/profile']);
    } else {
      this.checkFormValidity(this.profileForm);
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  checkFormValidity(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control && control.invalid) {
        console.log(`Field: ${field}, Errors:`, control.errors);
      }
    });
  }
}
