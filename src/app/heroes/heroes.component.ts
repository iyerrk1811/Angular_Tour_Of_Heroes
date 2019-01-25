import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: "WindStorm"
  };

  /* setName(){
    return "hhhhh";
  } */

  constructor() {
    // this.hero.name = "WindStorm";
    // this.hero.name = this.setName();
  }

  ngOnInit() {
  }

}
