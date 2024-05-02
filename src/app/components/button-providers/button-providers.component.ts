import { IonButton } from '@ionic/angular/standalone';
import { Component, Input, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export type Provider = 'google' | 'facebook';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, IonButton] ,
  selector: 'app-button-providers',
  templateUrl: './button-providers.component.html',
  styleUrls: ['./button-providers.component.scss'],
})
export class ButtonProvidersComponent   {
  @Input () isLogin = false;

  private _authService = inject(AuthService)
  private _router = inject(Router)

  providerAction(provider: Provider): void {
    if (provider === 'google') {
      this.signUpWithGoogle();
    } else {
      this.signUpWithFacebook();
    }
  }
  
  async signUpWithGoogle(): Promise <void> {
    try{
      const result = await this._authService.signInWithGoogleProvider();
      this._router.navigateByUrl('/');
      console.log(result)
    }catch (error) {
      console.log(error);
    }
  }

  async signUpWithFacebook(): Promise <void> {
    try{
      const result = await this._authService.signInWithFacebookProvider();
      this._router.navigateByUrl('/');
      console.log(result)
    }catch (error) {
      console.log(error);
    }
  }

}
