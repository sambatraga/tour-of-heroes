import { Component, Input } from '@angular/core';
import { Hero } from '../../hero';
import { Location, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero-service/hero.service';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent {
  hero?: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { };

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => this.hero = hero);
  }

  goBack() {
    this.location.back()
  }
}
