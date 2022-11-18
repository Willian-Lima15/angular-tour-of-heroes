import { HeroService } from './../core/hero.service';
import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../shared/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros: HeroModel[] = []
  selectHero?: HeroModel

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.load()
  }

  load() {
    this.heroService.getHeroes()
      .subscribe(res => this.heros = res)
  }

  onSelect(hero: HeroModel) {
    this.selectHero = hero
  }

}
