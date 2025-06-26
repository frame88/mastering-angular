import { Component, signal } from '@angular/core';
import { Picsum } from '../shared/picsum';
import { Title } from '../shared/title';


@Component({
  selector: 'app-play',
  imports: [Picsum, Title],
  template: `
    <app-title size="sm">Title SM</app-title>
    <app-title size="md">Title MD</app-title>
    <app-title size="xl" underlined>Title XL</app-title>
    <app-title >Default (MD)</app-title>
`,
  styles: ``
})
export class Play {
}

// creazione di un componente dinamico riferito alla tipografia
// basta scrviere una direttiva ed assume uno stile diverso
//c'è una variante che qui non è stata inclusa negli appunti del video