import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class NotebookManagementService {
    headers: Headers;
    options: RequestOptions;
 constructor(private http:Http ) { }

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

  editNotebook(id, brand, nbname, price, cpu, gpu, os, display, ram, hdd, img_url) {

    let body = {
      "id": id,
      "brand": brand,
      "nbname": nbname,
      "price": price,
      "cpu": cpu,
      "gpu": gpu,
      "os": os,
      "display": display,
      "ram": ram,
      "hdd": hdd,
      "img_url": img_url
    }


    return this.http.put("http://localhost:3000/notebook/edit/" + id, body)
      .map((res) => res.json());
  }
}
