import { Component, inject, signal } from '@angular/core';
import { Pelicula, PeliculasService } from '../../services/peliculas.service';

@Component({
  imports: [],
  selector: 'app-peliculas',
  styleUrl: './peliculas.css',
  templateUrl: './peliculas.html',
})
export class Peliculas {

  private peliculaService = inject(PeliculasService);
  peliculas = signal<Pelicula[]>([]);


  ngOnInit() {
    this.peliculaService.getPeliculas().subscribe((data) => this.peliculas.set(data));
  }
}

