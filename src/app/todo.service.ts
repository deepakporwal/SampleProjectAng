import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _store: Store<any>) { }
}
