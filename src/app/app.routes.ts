import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./play/play').then(m => m.Play) },
    { path: 'play', loadComponent: () => import('./play/play').then(m => m.Play) }
];
