import { Component, input } from '@angular/core';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css',
})
export class CountryDetailsComponent {
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
}
