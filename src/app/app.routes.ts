import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'auth-options',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'auth-sign-up',
    loadComponent: () => import('./pages/auth-sign-up/auth-sign-up.page').then( m => m.AuthSignUpPage)
  },
  {
    path: 'auth-options',
    loadComponent: () => import('./pages/auth-options/auth-options.page').then( m => m.AuthOptionsPage)
  },

  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },  {
    path: 'shoppin-cart',
    loadComponent: () => import('./pages/shoppin-cart/shoppin-cart.page').then( m => m.ShoppinCartPage)
  },
  {
    path: 'shopping-history',
    loadComponent: () => import('./pages/shopping-history/shopping-history.page').then( m => m.ShoppingHistoryPage)
  }


];
