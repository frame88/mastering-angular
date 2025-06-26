import { Component, signal } from '@angular/core';
import { Chat } from '../components/chat';
import { Bubble } from '../components/bubble';

export type ChatItem = {
  text: string;
  button?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  align?: 'start' | 'end';  
}

@Component({
  selector: 'app-play',
  imports: [Bubble, Chat],
  template: `
   <app-chat
     [chat]="chat()"
     (buttonItemClick)="doSomething($event)"
   />  `,
  styles: ``
})
export class Play {

  chat = signal<ChatItem[]>([
    {
      text: 'Hello World!',
      button: 'CLICK'
    },
    {
      text: 'Fine Thanks!',
      variant: 'secondary',
      align: 'end',
    },
    {
      text: 'Great!',
      variant: 'accent',
      align: 'start',
    }
  ])
  
  doSomething(msg: string) {
    console.log(msg);
  }
}



// questo commit applica quello che ho scritto precedentemente a un contesto piu dinamico e concreto
// (oltre ad aggiungere la parte di stile con le variant che avevo volutmanete omesso)
// tramite un array hardcoded, dopo aver definito un tipo, attribuisco dinamicamente ad ogni fumetto:
// 1. funzione (onclick)
// 2. stile
// 3. allineamento fine o inizio riga
// 4. testo

//dopodiche definisco un altro componente "chat" anche lui dinamico, in cui importo il componente dinamico bubble
// il parent child viene poi innestato all'interno del playground che gli passa i dati (l'array di chat)
