import {
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { Country } from '../countries-model';
import { HomeCardComponent } from '../home-card/home-card.component';
import { CountriesService } from '../countries.service';
import { SelectComponent } from '../select/select.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormatBigNumbersPipe } from "../format-big-numbers.pipe";

@Component({
  selector: 'app-country-home',
  standalone: true,
  imports: [HomeCardComponent, SelectComponent, RouterLink, FormsModule],
  templateUrl: './country-home.component.html',
  styleUrl: './country-home.component.css',
})
export class CountryHomeComponent implements OnInit {
  searchFilter: string = '';
  countries: Country[] = [];
  private countriesService = inject(CountriesService);
  private destroyRef = inject(DestroyRef);
  countriesList: Country[] = [];

  ngOnInit(): void {
    const subscription = this.countriesService.getAllCountries().subscribe({
      next: (resData) => {
        this.countries = resData;
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  get filteredCountries() {
    return this.countries.filter(country => country.name.common.toLowerCase().includes(this.searchFilter.toLowerCase()))
  }
}

