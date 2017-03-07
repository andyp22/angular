import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heros';
  heros: Hero[];
  selectedHero: Hero;

  constructor(private heroservice: HeroService) {}

  ngOnInit(): void {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeros(): void {
    this.heroservice.getHeros().then(heros => this.heros = heros);
  }
}
