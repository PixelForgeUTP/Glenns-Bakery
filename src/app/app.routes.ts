import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'auth-sign-up',
    loadComponent: () => import('./auth-sign-up/auth-sign-up.page').then( m => m.AuthSignUpPage)
  },
  {
    path: 'auth-options',
    loadComponent: () => import('./auth-options/auth-options.page').then( m => m.AuthOptionsPage)
  },

  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  }

];
