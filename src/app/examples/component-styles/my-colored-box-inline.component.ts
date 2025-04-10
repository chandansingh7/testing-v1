// my-colored-box.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-colored-box',
  template: `
    <div [style.backgroundColor]="boxColor" class="box">
      This box color is set via TypeScript!
    </div>
    <button (click)="changeColor('pink')">Pink</button>
    <button (click)="changeColor('lightblue')">Light Blue</button>
    <button (click)="changeColor('lightgreen')">Light Green</button>
  `,
  styles: [`
    .box {
      width: 200px;
      height: 200px;
      margin: 1rem;
    }
  `]
})
export class ColoredBoxComponent {
  boxColor = 'lightgray';

  // TypeScript function to update styles
  changeColor(color: string) {
    this.boxColor = color;
  }
}
