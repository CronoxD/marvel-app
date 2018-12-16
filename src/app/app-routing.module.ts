import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComicsComponent } from './components/comics/comics.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ComicComponent } from './components/comic/comic.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'comics', component: ComicsComponent},
  { path: 'comics/:id', component: ComicComponent},
  { path: 'characters', component: HeroesComponent},
  { path: 'characters/:id', component: HeroeComponent},
  { path: 'search', component: SearchComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path:'**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
