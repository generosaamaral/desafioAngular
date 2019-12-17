import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListaWebService {

  constructor(private http:HttpClient) { }
 
 
  getAll(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  get(Id: number){
     return this.http.get('https://jsonplaceholder.typicode.com/users/ ${id}')
  }
}
  
  
  //public obterlista():any {}
 // return this.

