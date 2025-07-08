import { Component, signal } from '@angular/core';
import { SidePanel } from '../shared/side-panel';


@Component({
  selector: 'app-play',
  imports: [SidePanel],
  template: `
    <div class="flex justify-end">
      <button (click)="isOpen.set(true)" class="btn">
        OPEN PANEL
      </button>
    </div>

    <app-side-panel
    title="My Panel"
    [(isOpen)]="isOpen"
    >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto at aut mollitia, similique sit voluptatum? Aliquam quaerat repellendus temporibus ut vero. Atque culpa ea fugit laudantium repellat reprehenderit, sint?
    </app-side-panel>
  `,
  styles: ``
})
export class Play {
  isOpen = signal(false);

}

// in questo componente abbiamo un bottone che apre il side panel
// tutto è ottimizzato tramite un computed che carica le classi css nell'host, solo quando il valore isOpen
// è true. Al click gli vengono attribuite due classi Tail wind per il position fixed,
// interessante è l'utilizzo di model che permette un binding direzionale e fa risparmiare una 
//quantita di codice notevole