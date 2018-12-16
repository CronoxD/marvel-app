import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../servicios/home.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics: any[];
  loading:boolean = true;

  constructor( private _homeService: HomeService) {}

  ngOnInit() {
    this.setData()
  }

  setData() {
    this._homeService.getHome('comics')
      .subscribe(data => {
        this.comics = data;
        console.log(data)
        this.loading = false;
      });
  }

}
