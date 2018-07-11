import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../models/movie.model';
import { MovieService } from './movie.service';

@Component({
  templateUrl: './movie-add.component.html'
})
export class MovieAddComponent {

  movie: Movie = new Movie();

  constructor(private router: Router, private movieService: MovieService) {

  }

  createMovie(): void {
    this.movieService.createMovie(this.movie)
        .subscribe( data => {
          alert("Movie created successfully.");
        });

  };

}
