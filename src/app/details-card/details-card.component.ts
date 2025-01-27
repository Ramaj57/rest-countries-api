import { Component, computed, input, signal } from '@angular/core';
import { Country } from '../countries-model';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.css'
})
export class DetailsCardComponent {
countries = signal<Country[]>([]);
name = input<string>('');
  nativeName = input<string>('');
  population = input<number>();
  region = input<string>('');
  subregion = input<string>('');
  capital = input<string>();
  topLevelDomain = input<[string]>();
  currencies = input<string>();
  languages = input<string>('');
  borders = input<string>('');
  flag = input<string>();
    alt = computed(() => 'picture of ' + this.name() + "'s flag");
}
