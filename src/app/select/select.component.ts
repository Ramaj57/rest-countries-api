import { NgClass } from '@angular/common';
import { Component, input,output } from '@angular/core';

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
isDark = false;

onSelect(e:any) {
  this.valueChange.emit(e.target.value)
}

toggleBodyDarkMode(){
  this.isDark = !this.isDark;
}
}
