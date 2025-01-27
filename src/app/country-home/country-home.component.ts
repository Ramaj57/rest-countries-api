import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Country } from '../countries-model';
import { HomeCardComponent } from '../home-card/home-card.component';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country-home',
  standalone: true,
  imports: [HomeCardComponent],
  templateUrl: './country-home.component.html',
  styleUrl: './country-home.component.css',
})
export class CountryHomeComponent implements OnInit {
  countries = signal<Country[]>([]);
  private countriesService = inject(CountriesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.countriesService.loadHomePage().subscribe({
      next: (resData) => {
        this.countries.set(resData);
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
    console.log(subscription);
  }
}
