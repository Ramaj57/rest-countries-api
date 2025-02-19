import { NgClass } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  toggle = output<void>();
  isDark = false;

  toggleBodyDarkMode() {
    this.isDark = !this.isDark;
  }

  onToggleDark() {
    this.toggle.emit();
  }
}
