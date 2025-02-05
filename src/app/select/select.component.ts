import { Component, input,output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
options = input<string[]>();
valueChange = output<string>();
value = input<string>();
placeholder = input<string>()

onSelect(value:string) {
  this.valueChange.emit(value);
}

}
