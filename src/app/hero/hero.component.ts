import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  ngOnInit(): void {

  }

}


