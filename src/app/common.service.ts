import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  allUserDataUrl = "https://jsonplaceholder.typicode.com/posts";
  // getUserUrl = "("
  constructor(private http: HttpClient) { }

  getUsersAllData() {
    return this.http.get(this.allUserDataUrl);
  }
  getUserDetail(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
