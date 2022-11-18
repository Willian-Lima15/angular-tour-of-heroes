import { MessagesService } from './messages.service';
import { Observable, of } from 'rxjs';
import { HEROES } from './../mock/mock-heroes';
import { HeroModel } from './../shared/hero.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor(
  private messagesService: MessagesService
  ) { }

getHeroes(): Observable<HeroModel[]> {
  const heroes = of(HEROES);
  this.messagesService.add('mensagens dos services')
  return heroes
}

}
