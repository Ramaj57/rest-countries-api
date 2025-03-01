import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { Country } from '../countries-model';
import { HomeCardComponent } from '../home-card/home-card.component';
import { CountriesService } from '../countries.service';
import { SelectComponent } from '../select/select.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../theme.service';

const region_Options = [
  'Africa',
  'Americas',
  'Antarctic',
  'Asia',
  'Europe',
  'Oceania',
];

@Component({
  selector: 'app-country-home',
  standalone: true,
  imports: [
    HomeCardComponent,
    SelectComponent,
    RouterLink,
    FormsModule,
    SelectComponent,
  ],
  templateUrl: './country-home.component.html',
  styleUrl: './country-home.component.css',
})
export class CountryHomeComponent implements OnInit {
  searchFilter = signal<string>('');
  regionFilter = signal<string>('');
  countries = signal<Country[]>([]);
  private countriesService = inject(CountriesService);
  private destroyRef = inject(DestroyRef);
  regionOptions = signal(region_Options);
  public themeService = inject(ThemeService);
  order = input<'asc' | 'desc'>();

  ngOnInit(): void {
    const subscription = this.countriesService.getAllCountries().subscribe({
      next: (resData) => {
        this.countries.set(resData);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  get filteredCountries() {
    return this.countries()
      ? this.countries().sort((a,b) => {
        if (this.order() === 'desc') {
          return a.name.common > b.name.common ? -1 : 1;
        } else {
          return a.name.common > b.name.common ? 1 : -1;
      }})
          .filter((country) =>
            this.searchFilter()
              ? country.name.common
                  .toLowerCase()
                  .includes(this.searchFilter().toLowerCase())
              : country
          )
          .filter((country) =>
            this.regionFilter()
              ? country.region.includes(this.regionFilter())
              : country
          )
      : this.countries()}
    };
  
