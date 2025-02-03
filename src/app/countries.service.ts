import { inject, Injectable, signal } from '@angular/core';
import { Country } from './countries-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  allCountries = signal<Country[]>([]);
  private httpClient = inject(HttpClient);

  fetchCountryData(url: string) {
    return this.httpClient.get<Country[]>(url);
  }

  getAllCountries() {
    return this.fetchCountryData('https://restcountries.com/v3.1/all');
  }

  getCountryByName(name:string) {
    return this.fetchCountryData(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    ).pipe(map(([resData]) => resData));
  }
}
