import { Component, computed, inject, input } from '@angular/core';
import { FormatBigNumbersPipe } from '../format-big-numbers.pipe';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [FormatBigNumbersPipe],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
})
export class HomeCardComponent {
  name = input<string>('');
  population = input<string>('');
  region = input<string>('');
  nativeName = input<string>('');
  subregion = input<string>('');
  topLevelDomain = input<[string]>(['']);
  currencies = input<string>('');
  languages = input<string>('');
  capital = input<string[] | undefined>(['']);
  flag = input<string>('');
  alt = computed(() => 'picture of ' + this.name() + "'s flag");
  public themeService = inject(ThemeService);
}
