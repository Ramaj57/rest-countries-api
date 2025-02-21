import { NgClass } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public themeService = inject(ThemeService);
  
toggleTheme() {
  this.themeService.toggleTheme();
}
}
