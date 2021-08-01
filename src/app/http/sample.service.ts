import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http : HttpClient) { }

  public name : string = '';
  
  getUsers(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
