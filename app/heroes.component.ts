import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({  
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  selectedHero: Hero;  

  constructor(private router: Router, private heroService: HeroService) { }

  getHeroes() {    
    this.heroService.getHeroes().then(promisedHeroes => this.heroes = promisedHeroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
