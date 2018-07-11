import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { AppRoutingModule } from './app.routing.module';
import {MovieService} from './movie/movie.service';
import {HttpClientModule} from "@angular/common/http";
import {MovieAddComponent} from './movie/movie-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieAddComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
        HttpClientModule,
        FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})

export class AppModule {}
