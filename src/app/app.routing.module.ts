import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import {MovieAddComponent} from './movie/movie-add.component';

const routes: Routes = [
  { path: 'movie', component: MovieComponent },
  { path: 'add', component: MovieAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
