import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-fill-profile',
  templateUrl: './fill-profile.page.html',
  styleUrls: ['./fill-profile.page.scss'],
  standalone: true,
  imports: [
    IonButton, 
    IonLabel, 
    IonItem, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FillProfilePage implements OnInit {

  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {
    this.profileForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: [{ value: '', disabled: true }, Validators.required],
      telefono: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadUserProfile();
  }

  async loadUserProfile() {
    const profileData = await this.profileService.getUserProfile();
    if (profileData) {
      this.profileForm.patchValue(profileData);
    }
  }

  async onSubmit() {
    if (this.profileForm.valid) {
      await this.profileService.updateUserProfile(this.profileForm.value);
      console.log('Profile updated successfully');
    } else {
      console.log('Form is not valid');
    }
  }
}
