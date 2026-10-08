import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pelicula {
    id: string;
    title: string;
    image: string;
    description: string;
    director: string;
    producer: string;
}

@Injectable({
    providedIn: 'root'
})

export class PeliculasService {
    private http = inject(HttpClient);
    private apiUrl = 'https://ghibliapi.vercel.app/films';

    getPeliculas(): Observable<Pelicula[]> {
        return this.http.get<Pelicula[]>(this.apiUrl);
    }

}
