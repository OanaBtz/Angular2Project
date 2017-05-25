import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GameService {
    constructor( private http: Http){}

addGame( name: string, description: string, urlImage: string){
        let body = 'name='+name+"&description="+description+"&urlImage="+urlImage+'';
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http.post('http://localhost:3000/games', body, {headers: headers})
        .subscribe(data => {console.log("it worked!")});
    
}
getGames() {
      return this.http.get(`http://localhost:3000/games`).map((res:Response) => res.json())
}
  
deleteGame(id: string){
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.delete('http://localhost:3000/games/'+id, {headers: headers})
    .subscribe(data => {console.log("it worked! " +id)});
    
}
// getGame(id: string) {
//       return this.http.get(`http://localhost:3000/games/`+id).map((res:Response) => res.json())
// }

  

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
