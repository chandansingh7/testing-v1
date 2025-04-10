// parent.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<div>
    <app-colored-boxrec [style.--box-bg-color]="color"></app-colored-boxrec>
  </div>

  <button (click)="color = 'lightblue'">Light Blue</button>
  <button (click)="color = 'lightgreen'">Light Green</button>
  <button (click)="color = 'pink'">Pink</button>`
})
export class ParentComponent {
  color = 'lightgray'; // initial color
}
