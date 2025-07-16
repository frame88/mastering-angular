import { booleanAttribute, Component, input } from '@angular/core';
import { Variant } from './button';

export type ArrayButton = {
  label: string;
  variant: Variant;
  action?: () => void; 
}
import { Button } from './button';
import { ButtonGroup } from './button-group';

@Component({
  selector: 'app-button-array',
  imports: [Button, ButtonGroup],
  template: `
    <app-button-group
      [gap]="gap()"
      [borders]="borders()"
      [wrap]="wrap()"
      [align]="align()"
    >
      @for(button of data(); track $index) {
        <app-button
          [variant]="button.variant"
          (click)="button.action ? button.action() : null"
        >{{button.label}}</app-button>
      }
    </app-button-group>  `,
  styles: ``
})
export class ButtonArray {
  data = input.required<ArrayButton[]>()
  gap = input<1 | 2 | 4 | 8>(1)
  borders = input(false, { transform: booleanAttribute })
  wrap = input(false, { transform: booleanAttribute })
  align = input<'start' | 'center' | 'end'>('start')
}
