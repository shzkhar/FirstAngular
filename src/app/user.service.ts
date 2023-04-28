import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }

   signup(user:any):Observable<any>{
    let url = "http://localhost:9999/insertUserEntityData"
    return this.http.post(url, user);
   }

   getAllUsers():Observable<any> {
    return this.http.get("http://localhost:9999/users")
  }
}
