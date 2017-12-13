import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class NotebookManagementService {
    headers: Headers;
    options: RequestOptions;
 constructor(private http:Http ) { }

  getNotebookList(){
    return this.http.get("http://localhost:3000/notebook/get").map((res) => res.json());
  }

 deleteNotebook(id) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({ headers: this.headers });

   // console.log("http://61.90.233.80:8082/admin/removeadmin/" + id);
    return this.http.delete("http://localhost:3000/notebook/remove/" + id, this.options)
      .map((res) => res.json());
  }

  updateNotebook(cpu, gpu, ram, hdd, price) {

    let body = {
      "cpu": cpu,
      "gpu": gpu,
      "ram": ram,
      "hdd": hdd,
      "price": price
    }


    return this.http.put("http://localhost:3000/notebook/edit/", body)
      .map((res) => res.json());
  }
}
