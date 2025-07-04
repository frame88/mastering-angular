import { Component, signal } from '@angular/core';
import { Picsum } from '../shared/picsum';
import { Title } from '../shared/title';
import { Fx } from '../shared/fx';


@Component({
  selector: 'app-play',
  imports: [Picsum, Title, Fx],
  template: `
    <app-fx [gap]="16" justify="between">
      <div>left</div>
      <div>middle</div>
      <div>right</div>
    </app-fx>

    <app-fx [gap]="100" justify="end">
      <div>left</div>
      <div>middle</div>
      <div>right</div>
    </app-fx>

    <app-fx justify="start">
      <div>left</div>
      <div>middle</div>
      <div>right</div>
    </app-fx>
`,
  styles: ``
})
export class Play {
}

// creazione di un componente dinamico riferito ai template
// applicazione del justify e del gap
// (non da chissà quale potere in più)
