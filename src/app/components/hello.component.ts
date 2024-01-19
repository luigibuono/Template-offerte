import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<a href="/home"><h1>Template {{name}}!</h1></a>`,
  styles: [`h1 { font-family: Lato; font-size: 2rem; margin-left: 20px;margin-top:6px }a{ text-decoration:none; color: white;}`]
})
export class HelloComponent {
  @Input() name!: string;
}
