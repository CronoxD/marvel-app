import { Injectable } from '@angular/core';
import { md5 } from '../../assets/ts/md5';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService{
    constructor(private http:HttpClient) { }
    
    getQuery( query:string, limit:number = 15, offset:number = 600, search:string=null) {
        const ts = new Date().getTime();
        //public
        const apiKey = '33e5a9bb162b364ad83dd363aa39f75a';

        // Initialize Params Object
        let params = new HttpParams();

        if (search != null) 
            params = params.append('nameStartsWith', search);


        // Begin assigning parameters
        params = params.append('apikey', apiKey);
        params = params.append('limit', limit.toString());
        params = params.append('offset', offset.toString());
        
        const url = `https://gateway.marvel.com/v1/public/${query}`;
        
        return this.http.get(url, { params });
    }
    getHome(query:string) {
        
        let limit = 15;
        let offset = Math.random() * (1490-1) + 1;

        return this.getQuery(query, limit, offset)
            .pipe( map( data => data['data'].results ));
    }

    getItem(query:string,elementId:number) {

        return this.getQuery(`${query}/${elementId}`)
            .pipe( map( data => data['data'].results[0]));
    }

    getItemInfo(query:string, characterId:number, element:string, limit:number=3, offset:number=0) {
        return this.getQuery(`${query}/${characterId}/${element}`, limit, offset)
    }

    searchHeroe(search:string){
        return this.getQuery('characters', 20, 1, search)
            .pipe( map( data => data['data'].results ));
    }

}