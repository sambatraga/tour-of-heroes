import { Component, Input } from '@angular/core';
import { Hero } from '../../hero';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent {
  @Input() hero?: Hero;
}
