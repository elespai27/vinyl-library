import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'profile-edit',
    loadComponent: () => import('./pages/profile-edit/profile-edit.page').then( m => m.ProfileEditPage)
  },
  {
    path: 'collection',
    loadComponent: () => import('./pages/collection/collection.page').then( m => m.CollectionPage)
  },
  {
    path: 'vinyl-detail/:id',
    loadComponent: () => import('./pages/vinyl-detail/vinyl-detail.page').then( m => m.VinylDetailPage)
  },
  {
    path: 'vinyl-form/:id',
    loadComponent: () => import('./pages/vinyl-form/vinyl-form.page').then( m => m.VinylFormPage)
  },
  {
    path: 'barcode-scan',
    loadComponent: () => import('./pages/barcode-scan/barcode-scan.page').then( m => m.BarcodeScanPage)
  },
];
