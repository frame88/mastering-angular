import { booleanAttribute, Component, computed, HostBinding, input, inject } from '@angular/core';
import { Fx } from './fx';

@Component({
  selector: 'app-fx-item',
  host: {
    '[class.grow]': 'grow()'
  },
  imports: [Fx],
  template: `
    <ng-content></ng-content>
  `,
  styles: ``
})
export class FxItem {
  grow = input(false, { transform: booleanAttribute});

  fxComponent = inject(Fx, { optional: true })

  constructor() {
    if (!this.fxComponent) {
      throw new Error('fxItemComponent deve essere all\'interno di fxComponent')
    } else {
      console.log(this.fxComponent.justify())
      console.log(this.fxComponent?.gap())
    }
  }
}
