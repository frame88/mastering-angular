import { NgClass } from '@angular/common';
import { Component, input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-button-group',
  imports: [NgClass],
  template: `
    <div
      class="inline-flex rounded-xl p-3"
      [ngClass]="{
        'gap-1': gap() === 1,
        'gap-2': gap() === 2,
        'gap-4': gap() === 4,
        'gap-8': gap() === 8,
        'flex-wrap': wrap(),
        'border-2 border-slate-400': borders(),
        'justify-start': align() === 'start',
        'justify-center': align() === 'center',
        'justify-end': align() === 'end',
      }"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: ``
})
export class ButtonGroup {
  gap = input<1 | 2 | 4 | 8>(1)
  borders = input(false, { transform: booleanAttribute })
  wrap = input(false, { transform: booleanAttribute })
  align = input<'start' | 'center' | 'end'>('start')
}
