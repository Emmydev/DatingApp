import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { User } from '../_models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl;

  constructor( private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + 'users', httpOptions);
  }

  getUser(id): Observable<User>{
    return this.http.get<User>(this.baseUrl + 'users/' + id, httpOptions);
  }

}
