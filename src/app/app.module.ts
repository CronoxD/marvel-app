import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ComicsComponent } from './components/comics/comics.component';

//SERVICIOS
import { HomeService } from './servicios/home.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagemPipe } from './pipes/imagem.pipe';
import { InfoHeroeComponent } from './components/info-heroe/info-heroe.component';
import { ComicComponent } from './components/comic/comic.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComicsComponent,
    HeroesComponent,
    HomeComponent,
    HeroeComponent,
    ImagemPipe,
    InfoHeroeComponent,
    ComicComponent,
    TarjetaComponent,
    LoadingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
