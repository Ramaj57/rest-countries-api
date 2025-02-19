import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { Country, Currencies, Languages, NativeName } from '../countries-model';
import { CountriesService } from '../countries.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { FormatBigNumbersPipe } from '../format-big-numbers.pipe';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [FormatBigNumbersPipe],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css',
})
export class CountryDetailsComponent {
  countries = signal<Country[]>([]);
  nativeName = signal<NativeName>({});
  population = signal<string>('');
  region = signal<string>('');
  capital = signal<string[]>(['']);
  topLevelDomain = signal<string[]>(['']);
  currencies = signal<Currencies>({});
  languages = signal<Languages>({});
  country$!: Observable<Country>;
  subregion = signal<string>('');
isDark = false;
  private countriesService = inject(CountriesService);
  private destroyRef = inject(DestroyRef);
  private route = inject(ActivatedRoute);
  image = signal<string>('');
  name = signal<string>('');
  alt = computed<string>(() => 'picture of ' + this.name() + "'s flag");

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country$ = this.countriesService
        .getCountryByName(params['place'])
        .pipe(tap((res) => console.log(res)));
      this.country$.subscribe((country) => {
        // Update signals with country data
        if(country.name.nativeName)
          this.nativeName.set(country.name.nativeName);
         // Fallback in case the native name is missing
        this.image.set(country.flags.png);
        this.population.set(country.population);
        this.region.set(country.region || 'N/A');
        this.capital.set(country.capital || ['N/A']); // Assuming capital is an array
        this.topLevelDomain.set(country.tld || ['N/A']); // Assuming tld is an array
        if(country.currencies)
        this.currencies.set(country.currencies);
      if(country.languages) // Assuming currencies is an array of objects
        this.languages.set(country.languages); // Join languages into a string if multiple
        this.name.set(country.name.common || 'N/A');
        this.subregion.set(country.subregion || 'N/A');
      });

      const subscription = this.countriesService
        .getAllCountries()
        .pipe(map(([resData]) => resData))
        .subscribe({
          next: (resData) => {
            this.countries.set([resData]);
          },
        });
      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      });
    });
  }

  displayCurrencies(currencies: Currencies) {
    return Object.values(currencies).map(money => money.name);
  }

  displayLanguages(languages: Languages) {
    return Object.values(languages);
  }

  displayNativeName(nativeName: NativeName) {
    return Object.values(nativeName).map((orginal) => orginal.official);
  }

  
}
