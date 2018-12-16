import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../servicios/home.service';

@Component({
  selector: 'app-info-heroe',
  templateUrl: './info-heroe.component.html',
  styleUrls: ['./info-heroe.component.css']
})
export class InfoHeroeComponent implements OnInit {

  @Input() query:string;
  @Input() item:string;
  items:any[] = [];
  total:number;
  count:number;
  offset:number = 0;
  characterId:number;
  limit:number = 3;
  loading:boolean = true;
  

  constructor(private activatedRoute:ActivatedRoute,
              private _heroeService:HomeService) {
              }
              
  ngOnInit() {

    const x = window.matchMedia("(max-width: 767px)");
    this.setLimitByMatch(x); // Call listener function at run time
    x.addListener(this.setLimitByMatch); // Attach listener function on state changes

    this.activatedRoute.params
      .subscribe(params => {
        this.characterId = params.id;
        this.getData();
      });
  }

  setLimitByMatch = x => {
    if (x.matches) {
      this.limit = 1;
      this.getData();
    } else {
      this.limit = 3;
      this.getData();
    }
  }
  
  getData(direction:number=0) {
    this.loading = true;

    //Se aumenta 1 a offset
    this.offset += (this.limit * direction);

    this._heroeService.getItemInfo(this.item,this.characterId,this.query,this.limit,this.offset)
    .subscribe(data => {
      this.items = data['data'].results;
      this.total = data['data'].total;
      this.count = data['data'].count;
      this.loading = false;
    });
  }
}
