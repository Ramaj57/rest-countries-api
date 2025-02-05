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


onSelect(e:any) {
  this.valueChange.emit(e.target.value)
}
}
