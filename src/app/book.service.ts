import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }

  addbook(book:any):Observable<any>{
         return this.httpClient.post("http://localhost:9999/InsertBook",book );
  }

  getAllBooks():Observable<any>{
    return this.httpClient.get("http://localhost:9999/getAllBook")
  }

  deleteBookById(id:any):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"/deleteBook/"+id )
   }

   filterBookByPrice(minValue:any,maxValue:any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/searchByRange/"+minValue+"/"+maxValue)
    
  }

  searchBookByAuthorName(authorname:any, min:any, max:any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/search/"+authorname+"/"+min+"/"+max)
  }
}
