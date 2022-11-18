import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../shared/hero.model';
import { HEROES } from '../mock/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros = HEROES;
  selectHero?: HeroModel

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: HeroModel) {
    this.selectHero = hero
  }

}
