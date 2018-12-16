# MarvelApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.
And using de [Marvel API](https://developer.marvel.com/)

You can see the result here: [Marvel App](https://cronoxd.github.io/marvel-app/characters)

If you want to try the project you need to get an api key from the developer Marvel page.

## How to do a request in JavaScript with Angular? (There are better ways. but this is the simplest to me).

```javascript
import { HttpClient, HttpParams } from '@angular/common/http';
...
constructor(private http:HttpClient) { }
...
getQuery( query:string, limit:number = 15, offset:number = 600, search:string=null) {
        const ts = new Date().getTime();
        
        const apiKey = '33e5a9bb162b364ad83dd363aa39f75a'; //Your Public Key
        //NOTE: DON'T COMMIT YOU PRIVATE KEY
        const apiP = '4kot83pld53mmawdm11a4313jmb12v4f1c2x31'; //Your private Key
        const hash = md5(ts+apiP+apiKey);

        // Initialize Params Object
        let params = new HttpParams();

        if (search != null) 
            params = params.append('nameStartsWith', search);


        // Begin assigning parameters
        params = params.append('apikey', apiKey);
        params = params.append('ts', ts.toString());
        params = params.append('hash', hash);
        params = params.append('limit', limit.toString());
        params = params.append('offset', offset.toString());
        
        const url = `https://gateway.marvel.com/v1/public/${query}`;
        
        return this.http.get(url, { params });
    }
...
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploy Angular Project to GitHub Pages

I'm using [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) to deploy the project.

```
$ npm install -g angular-cli-ghpages
$ ng build --prod --base-href https://cronoxd.github.io/marvel-app/
$ sudo ngh -no-silent --dir=dist/marvel-app
```