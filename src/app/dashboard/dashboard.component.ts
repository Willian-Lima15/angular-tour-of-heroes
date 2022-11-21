import { HeroModel } from './../shared/hero.model';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../core/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: HeroModel[]=[]

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getheroes()
  }

  getheroes(){
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = this.heroes.slice(1,5))
  }

}
