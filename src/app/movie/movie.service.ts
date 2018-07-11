import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from '../models/movie.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MovieService {

  constructor(private http:HttpClient) {}

	private movieUrl = '/api';

  public getMovies() {
    return this.http.get<Movie[]>(this.movieUrl);
  }

  public deleteMovie(movie) {
    return this.http.delete(this.movieUrl + "/"+ movie.id);
  }

  public createMovie(movie) {
    return this.http.post<Movie>(this.movieUrl, movie);
  }

}
