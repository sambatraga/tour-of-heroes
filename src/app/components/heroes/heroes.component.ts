import { Component } from '@angular/core';
import { Hero } from '../../hero';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from '../../services/hero-service/hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, HeroDetailsComponent],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) { };

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
