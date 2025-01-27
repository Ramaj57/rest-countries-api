import { Component, computed, input, signal } from '@angular/core';
import { Country } from '../countries-model';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
})
export class HomeCardComponent {
  countries = signal<Country[]>([]);
  name = input<string>('');
  population = input<number>();
  region = input<string>('');
  capital = input<string[] | undefined>(['']);
  flag = input<string>();
  alt = computed(() => 'picture of ' + this.name() + "'s flag");
}
