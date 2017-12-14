import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class NotebookManagementService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) { }

  getNotebookList() {
    return this.http.get("http://localhost:3000/notebook/getall").map((res) => res.json());
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

  editNotebook(notebook) {
    return this.http.put("http://localhost:3000/notebook/edit/", notebook)
      .map((res) => res.json());
  }

  likeNotebook(notebook, username) {
    let body = {
      "nbid": notebook._id,
      "username": username
    }
    return this.http.put("http://localhost:3000/notebook/like", body)
      .map((res) => res.json());
  }
  getNotebookLikeCount(notebook) {
    let body = {
      "nbid": notebook._id,
    }
    return this.http.post("http://localhost:3000/notebook/getLikeCount",body).map((res) => res.json());
  }
  getLikeUsers(notebook) {
    let body = {
      "nbid": notebook._id,
    }
    return this.http.post("http://localhost:3000/notebook/getLikeUsers",body).map((res) => res.json());
  }
}
