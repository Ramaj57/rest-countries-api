import { HttpClient } from '@angular/common/http';
import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { map } from 'rxjs';
import { Country } from '../countries';
import { CountryCardComponent } from "../country-card/country-card.component";
import { DropDownComponent } from "../drop-down/drop-down.component";


@Component({
  selector: 'app-country-home',
  standalone: true,
  imports: [CountryCardComponent, DropDownComponent],
  templateUrl: './country-home.component.html',
  styleUrl: './country-home.component.css',
})
export class CountryHomeComponent implements OnInit {
  countries = signal<Country[]>([]);

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
