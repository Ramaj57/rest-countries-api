import { inject, Injectable, signal } from '@angular/core';
import { Country } from './countries-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  allCountries = signal<Country[]>([]);
  private httpClient = inject(HttpClient);
  
    fetchCountryData(url: string) {
      return this.httpClient.get<Country[]>(url);
    }
  
    loadHomePage() {
      return this.fetchCountryData('https://restcountries.com/v3.1/all')
    }

  }

