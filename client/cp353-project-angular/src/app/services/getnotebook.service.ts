import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GetNotebookService {

 constructor(private http:Http ) { }

 getNotebookList(){
   return this.http.get("http://localhost:3000/notebook/get").map((res) => res.json());
 }

}
