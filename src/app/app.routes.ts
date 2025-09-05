import { Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToProfile = () => redirectLoggedInTo(['profile']);

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  // RUTAS PÚBLICAS (solo para usuarios NO autenticados)
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage),
    ...canActivate(redirectLoggedInToProfile) // Si ya está logueado → profile
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage),
    ...canActivate(redirectLoggedInToProfile) // Si ya está logueado → profile
  },

  // RUTAS PRIVADAS (solo para usuarios autenticados)
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage),
    ...canActivate(redirectUnauthorizedToLogin) // Si NO está logueado → login
  },
  {
    path: 'profile-edit',
    loadComponent: () => import('./pages/profile-edit/profile-edit.page').then( m => m.ProfileEditPage),
    ...canActivate(redirectUnauthorizedToLogin) // Si NO está logueado → login
  },
  {
    path: 'collection',
    loadComponent: () => import('./pages/collection/collection.page').then( m => m.CollectionPage),
    ...canActivate(redirectUnauthorizedToLogin) // Si NO está logueado → login
  },
  {
    path: 'vinyl-detail/:id',
    loadComponent: () => import('./pages/vinyl-detail/vinyl-detail.page').then( m => m.VinylDetailPage),
    ...canActivate(redirectUnauthorizedToLogin) // Si NO está logueado → login
  },
  {
    path: 'vinyl-form/:id',
    loadComponent: () => import('./pages/vinyl-form/vinyl-form.page').then( m => m.VinylFormPage),
    ...canActivate(redirectUnauthorizedToLogin) // Si NO está logueado → login
  },
  {
    path: 'barcode-scan',
    loadComponent: () => import('./pages/barcode-scan/barcode-scan.page').then( m => m.BarcodeScanPage),
    ...canActivate(redirectUnauthorizedToLogin) // Si NO está logueado → login
  },
];
