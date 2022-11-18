import { Component, Input, OnInit } from '@angular/core';
import { HeroModel } from '../shared/hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero?: HeroModel

  constructor() { }

  ngOnInit() {
  }

}
