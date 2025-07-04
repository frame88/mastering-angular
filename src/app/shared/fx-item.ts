import { booleanAttribute, Component, computed, HostBinding, input } from '@angular/core';

@Component({
  selector: 'app-fx-item',
  host: {
    '[class.grow]': 'grow()'
  },
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styles: ``
})
export class FxItem {
  grow = input(false, { transform: booleanAttribute});
}
