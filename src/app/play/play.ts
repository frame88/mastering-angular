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


// aggiornamento del capitolo 3 (il precedente)
// con class e computed
