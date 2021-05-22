import { Component, Input } from '@angular/core';
@Component({
  selector: 'first',
  template: `
    <h1>FIRST</h1>
  `
})
export class FirstComponent {
  @Input() First: string;
}
