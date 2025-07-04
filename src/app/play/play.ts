import { Component, signal } from '@angular/core';
import { Picsum } from '../shared/picsum';
import { Title } from '../shared/title';
import { Fx } from '../shared/fx';
import { FxItem } from '../shared/fx-item';


@Component({
  selector: 'app-play',
  imports: [Picsum, Title, Fx, FxItem],
  template: `
    <app-fx gap="10" justify="end">
      <app-fx-item>left</app-fx-item>
      <app-fx-item class="bg-slate-400 text-black" grow>middle</app-fx-item>
      <app-fx-item>right</app-fx-item>
    </app-fx>
  `,
  styles: ``
})
export class Play {
}

// tramite questa rifinitura è possibile attribuire dei valori direttamente sul componente dinamico
// host fa in modo che il valore passi dal padre al figlio
// altrimenti il valore 'grow' non verrrebbe applicato