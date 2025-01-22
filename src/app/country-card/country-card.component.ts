import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { map } from 'rxjs';
import { Country } from '../countries';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css',
})
export class CountryCardComponent {
  countries = signal<Country[]>([]);
  name = input<string>('');
  population = input<number>();
  region = input<string>('');
  capital = input<string[] | undefined>([""]);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = this.httpClient
      .get<Country[]>('https://restcountries.com/v3.1/all')
      .pipe(map((resData) => resData))
      .subscribe({
        next: (resData) => {
          this.countries.set(resData);
          console.log(resData);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
