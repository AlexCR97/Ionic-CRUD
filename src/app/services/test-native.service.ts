import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class TestNativeService {

  constructor(
    private http: HTTP,
  ) { }

  createUser(user: any): Promise<any> {
    return this.http.post('http://192.168.0.9/php-database-examples/mysql-insert-params.php', user, {});
  }

  deleteUser(idParam: string): Promise<any> {
    return this.http.post('http://192.168.0.9/php-database-examples/mysql-delete-params.php', { id: idParam }, {});
  }

  selectAllUsers(): Promise<any> {
    return this.http.get('http://192.168.0.9/php-database-examples/mysql-json-encode-multiple.php', {}, {});
  }

  selectAllUsersOopExample(): Promise<any> {
    return this.http.get('http://192.168.0.9/php-database-examples/oop-examples/ionic-select-all-request.php', {}, {});
  }
}
