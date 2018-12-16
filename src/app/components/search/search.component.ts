import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../servicios/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  personajes: any[];
  loading:boolean = true;

  constructor(private _homeService:HomeService) { }

  ngOnInit() {
  }

  search(value:string){
    
    this._homeService.searchHeroe(value)
      .subscribe(data =>{
        this.personajes = data;
        this.loading = false;
      });
  }

}
