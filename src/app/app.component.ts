import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rest-countries-api';
  isDark = signal<boolean>(false);

  toggleDarkMode() {
    if (!this.isDark()) {
      this.isDark.set(true);
      document.body.classList.toggle('dark');
    } else {
      this.isDark.set(false);
      document.body.classList.toggle('dark');
    }
  }
}
