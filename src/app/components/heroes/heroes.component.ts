import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../servicios/home.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  personajes: any[];
  loading:boolean = true;

  constructor( private _homeService: HomeService) { }

  ngOnInit() {
    this.setData();
  }

  setData() {
    this._homeService.getHome('characters')
      .subscribe(data => {
        this.personajes = data;
        this.loading = false;
      });
  }

}