import { Component, input, output } from '@angular/core';
import { Bubble } from './bubble';

export type ChatItem = {
  text: string
  button?: string
  buttonClick?: () => void
  variant?: 'primary' | 'secondary' | 'accent'
  align?: 'start' | 'end'
}


@Component({
  selector: 'app-chat',
  imports: [Bubble],
  template: `
    <div class="max-w-screen-sm mx-auto">
      @for (msg of chat() ; track $index) {
        <app-bubble
          [button]="msg.button"
          (buttonClick)="buttonItemClick.emit(msg.text)"
          [variant]="msg.variant"
          [align]="msg.align"
        >{{msg.text}}</app-bubble>
      }
    </div>  `,
  styles: ``
})
export class Chat {
  chat = input.required<ChatItem[]>()
  buttonItemClick = output<string>()
}
