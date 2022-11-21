import { MessagesService } from './messages.service';
import { Observable, of } from 'rxjs';
import { HEROES } from './../mock/mock-heroes';
import { HeroModel } from './../shared/hero.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor(
  private messagesService: MessagesService,
  private _http: HttpClient
  ) { }

getHeroes(): Observable<HeroModel[]> {
  const heroes = of(HEROES);
  this.messagesService.add('HeroService: fetched heroes')
  return heroes
}

getHero(id: number): Observable<HeroModel> {
  const hero = HEROES.find(h => h.id === id)!;
  this.messagesService.add(`HeroService: fetched hero id=${id}`);
  return of(hero)
}

}
