import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonItem, 
  IonLabel, 
  IonMenu, 
  IonMenuButton, 
  IonButtons, 
  IonList, 
  IonInput
} from '@ionic/angular/standalone';

import { CustomInputComponent } from "../../components/custom-input/custom-input.component";
import { MenuComponent } from 'src/app/components/menu/menu.component';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    
    MenuComponent,
    CommonModule, 
    FormsModule,
    RouterLink,
    CustomInputComponent,
    ReactiveFormsModule
  ]
})
export class AuthPage implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  handleValueChange(value: string) {
    console.log(value);
  }

  constructor(
    private authService: AuthService, 
    private router: Router,
    private location:Location,
  ) { }

  onSubmit() {
    console.log('Form Submitted', this.loginForm.value);
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value || '';
      const password = this.loginForm.get('password')?.value || '';
      this.authService.login(email, password)
        .then(result => {
          console.log("You are successfully logged in!", result);
          // Navigate to the desired route upon successful login
          this.router.navigate(['/home']);
        })
        .catch(error => {
          console.error("Error logging in: ", error);
          // Provide user feedback about the login error
        });
    } else {
      console.error('Form is not valid:',  this.loginForm.errors);
      // Iterate over the form controls and set them as touched to trigger validation messages
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
