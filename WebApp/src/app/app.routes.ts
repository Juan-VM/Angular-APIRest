import { Routes } from '@angular/router';
import { Peliculas } from './components/peliculas/peliculas';

export const routes: Routes = [
    {
        path: '',
        component: Peliculas
    },
    {
        path: 'peliculas',
        component: Peliculas
    }
];
