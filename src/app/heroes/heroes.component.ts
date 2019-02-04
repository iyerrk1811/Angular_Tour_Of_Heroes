import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  /* hero: Hero = {
    id: 1,
    name: "WindStorm"
  }; */

  /* setName(){
    return "hhhhh";
  } */

  constructor() {
    // this.hero.name = "WindStorm";
    // this.hero.name = this.setName();
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}
