import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../servicios/home.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  comic:any = {
    'stories': {
      'available': 0
    },
    'characters': {
      'available': 0
    },
    'series': {
      'available': 0
    }
  };
  loading:boolean = true;

  constructor(private activedRoute:ActivatedRoute,
              private _homeService:HomeService) {

    this.activedRoute.params.subscribe(params => this.setData(params.id));

  }

  ngOnInit() {
  }

  setData(id) {
    this._homeService.getItem('comics', id)
      .subscribe(data => {
        this.comic = data;
        this.loading = false;
        console.log(this.comic);
      });
  }

}
