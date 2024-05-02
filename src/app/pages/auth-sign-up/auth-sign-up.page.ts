import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton } from '@ionic/angular/standalone';

import { CustomInputComponent } from "../../components/custom-input/custom-input.component";

@Component({
  selector: 'app-auth-sign-up',
  templateUrl: './auth-sign-up.page.html',
  styleUrls: ['./auth-sign-up.page.scss'],
  standalone: true,
  imports: [
    IonButton, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    CustomInputComponent
  ]
})
export class AuthSignUpPage implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  
  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    console.log('Form Submitted', this.registerForm.value);
    if (this.registerForm.valid) {
      const email = this.registerForm.get('email')?.value || '';
      const password = this.registerForm.get('password')?.value || '';
      this.authService.register(email, password)
        .then(result => {
          console.log("You are successfully registered!", result);
          // Navigate to the desired route upon successful registration
          this.router.navigate(['/auth']); 
        })
        .catch(error => {
          console.error("Error registering: ", error);
          // Provide user feedback about the registration error
        });
    } else {
      console.error('Form is not valid:',  this.registerForm.errors);
      // Iterate over the form controls and set them as touched to trigger validation messages
      Object.keys(this.registerForm.controls).forEach(field => {
        const control = this.registerForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
  


 ngOnInit(): void {
   
 }
}