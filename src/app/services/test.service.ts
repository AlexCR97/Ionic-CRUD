import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private readonly httpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
  ) {
    this.httpHeaders.set('cache-control', 'no-cache');
    this.httpHeaders.set('Accept', 'application/json, text/plain');
    this.httpHeaders.set('Access-Control-Allow-Credentials', 'true');
    this.httpHeaders.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers');
    this.httpHeaders.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT');
    this.httpHeaders.set('Access-Control-Allow-Origin', '*');
    this.httpHeaders.set('Content-Type', 'application/json');
    //this.httpHeaders.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
  }

  createUser(user) {
    return this.http.post('http://192.168.0.9/php-database-examples/mysql-insert-params.php', JSON.stringify(user));
  }

  deleteUser(id: string) {
    return this.http.get('http://192.168.0.9/php-database-examples/mysql-delete-params.php?id=' + id);
  }

  selectAllUsers(): Observable<any> {
    return this.http.get('http://192.168.0.9/php-database-examples/mysql-json-encode-multiple.php');
  }

}
