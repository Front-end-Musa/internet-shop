import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  constructor() {
  }
  @Input()
  getValue(event: Event): any {
    const value = (event.target as HTMLInputElement).value;
  }
  @Output() onChange = new EventEmitter();

}
