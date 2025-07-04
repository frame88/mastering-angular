import { Component, input, numberAttribute  } from '@angular/core';

type Justify = 'start' | 'center' | 'between' | 'end';

@Component({
  selector: 'app-fx',
  imports: [],
  template: `
    <div
      class="flex"
      [class]="{
        'justify-start': justify() === 'start',
        'justify-center': justify() === 'center',
        'justify-end': justify() === 'end',
        'justify-between': justify() === 'between',
      }"
      [style.gap.px]="gap()"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: ``
})
export class Fx {
  gap = input(0, { transform: numberAttribute })
  justify = input<Justify>('start')
}
