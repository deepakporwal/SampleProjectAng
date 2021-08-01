import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export class ReadComponent implements OnInit {

    // Section 1
    tutorials: Observable<Tutorial[]>;
  
    // Section 2
    constructor(private store: Store<AppState>) { 
      this.tutorials = store.select('tutorial');
    }
  
    ngOnInit() {}
  
  }