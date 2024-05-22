import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

import { CustomInputComponent } from 'src/app/components/custom-input/custom-input.component';

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
    RouterLink,
    ReactiveFormsModule,
    CustomInputComponent,
    MatSnackBarModule
  ]
})
export class AuthSignUpPage implements OnInit {

  private _snackBar = inject(MatSnackBar);
  private profileService = inject(ProfileService);

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private location: Location
  ) { }

  onSubmit() {
    console.log('Form Submitted', this.registerForm.value);
    if (this.registerForm.valid) {
      const email = this.registerForm.get('email')?.value || '';
      const password = this.registerForm.get('password')?.value || '';
      this.authService.register(email, password)
        .then(result => {
          console.log("You are successfully registered!", result);
          const userUID = result.user.uid;
          localStorage.setItem('userUID', userUID);
          localStorage.setItem('Correo', email);
          
          // Call addUserProfile with empty values for nombre, apellido, and telefono
          this.profileService.addUserProfile('', '', '');
          
          const snackBarRef = this.openSnackBar();
          // Navigate to the desired route upon successful registration
          snackBarRef.afterDismissed().subscribe(() => {
            this.router.navigate(['/auth']);
          });
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

  openSnackBar() {
    return this._snackBar.open('Se ha registrado correctamente', 'Close', {
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    })
  }
  
  goBack() {
    this.location.back();
  }

  ngOnInit() {
    return 0;
  }
}
