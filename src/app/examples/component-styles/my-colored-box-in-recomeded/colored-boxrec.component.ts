import { Component } from '@angular/core';

@Component({
  selector: 'app-colored-boxrec',
  template: `
    <div class="box">
      This box color is set by a CSS variable!
    </div>
  `,
  styles: [
    `
      :host {
        /*
         Declare a default box color variable
         If the parent or a global style doesn't override this,
         it will use lightgray by default
        */
        --box-bg-color: lightgray;
      }

      .box {
        width: 200px;
        height: 200px;
        margin: 1rem;
        /* Use the variable, fallback to 'lightgray' if not defined */
        background-color: var(--box-bg-color, lightgray);
      }
    `,
  ],
})
export class ColoredBoxRecComponent {}
