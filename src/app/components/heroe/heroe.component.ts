import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../servicios/home.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  personaje:any = {
    'comics' : {
      'available' : 0
    },
    'stories': {
      'available': 0
    },
    'series': {
      'available': 0
    }
  };
  comics:any[] = [];
  characterId:number;
  loading:boolean = true;

  constructor(private activedRoute:ActivatedRoute,
              private _homeService:HomeService) {
    this.activedRoute.params.subscribe(params => this.setData(params.id));
  }
  
  ngOnInit() {
  }

  setData(characterId) {
    this._homeService.getItem('characters',characterId)
      .subscribe(data => {
        this.personaje = data;
        this.loading = false;
      });
  }
}
