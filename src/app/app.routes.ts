import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('../../src/app/play/play').then(m => m.Play) },
    { path: 'play', loadComponent: () => import('../../src/app/play/play').then(m => m.Play) }
];
