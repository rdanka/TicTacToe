import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton hero status="primary" *ngIf="!value"> {{ value }} </button>
    <button nbButton hero status="success" *ngIf="value == 'X'"> {{ value }} </button>
    <button nbButton hero status="info" *ngIf="value == 'O'"> {{ value }} </button>
  `,
  styles: ['button{height: 100%;width:100%;font-size: 400px;}']
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
