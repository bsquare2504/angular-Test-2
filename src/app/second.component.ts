import { Component, Input } from '@angular/core';
@Component({
  selector: 'second',
  template: `
    <h2>Second</h2>
  `
})
export class SecondComponent {
  @Input() Second: string;
}
