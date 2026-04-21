import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'booking',
    loadComponent: () => import('./booking.page').then((m) => m.BookingPage),
  },
  {
    path: '',
    redirectTo: 'booking',
    pathMatch: 'full',
  },
];
