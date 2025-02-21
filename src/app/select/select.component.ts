import { NgClass } from '@angular/common';
import { Component, inject, input,output } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgClass],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
options = input<string[]>();
valueChange = output<string>();
value = input<string>();
public themeService = inject(ThemeService);

onSelect(e:any) {
  this.valueChange.emit(e.target.value)
}


}
