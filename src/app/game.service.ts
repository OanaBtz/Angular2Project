import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';


@Injectable()
export class GameService {
    constructor( private http: Http){}

    addGame( name: string, description: string, urlImage: string){
        let body = 'name='+name+"&description="+description+"&url="+urlImage;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http.post('http://angular2api1.azurewebsites.net/api/internships/create', body, {headers: headers})
        .subscribe(data => {console.log("it worked!")});
    
    }
     private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
     let errMsg: string;
     if (error instanceof Response) {
       const body = error.json() || '';
       const err = body.error || JSON.stringify(body);
       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
     } else {
       errMsg = error.message ? error.message : error.toString();
     }
     console.error(errMsg);
     return Observable.throw(errMsg);
   }

}
