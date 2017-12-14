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

  deleteNotebook(notebook) {
    let body = {
      "nbid": notebook._id,
    }
    return this.http.post("http://localhost:3000/notebook/delete/", body)
      .map((res) => res.json());
  }

  createNotebook(notebook) {
    return this.http.post("http://localhost:3000/notebook/create/", notebook)
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
    return this.http.post("http://localhost:3000/notebook/getLikeCount", body).map((res) => res.json());
  }
  getLikeUsers(notebook) {
    let body = {
      "nbid": notebook._id,
    }
    return this.http.post("http://localhost:3000/notebook/getLikeUsers", body).map((res) => res.json());
  }
}
