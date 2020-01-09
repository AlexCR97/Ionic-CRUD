import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(
    public http: HttpClient,
  ) { }

  postData(body, file) { }

}
