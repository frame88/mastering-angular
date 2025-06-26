import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-bubble',
  imports: [NgClass],
  template: `
    <div
      class="chat"
      [ngClass]="{
        'chat-start': align() === 'start' || !align(),
        'chat-end': align() === 'end',
      }"
    >
      <div
        class="chat-bubble chat-bubble-secondary"
        [ngClass]="{
          'chat-bubble-primary': variant() === 'primary' || !variant(),
          'chat-bubble-secondary': variant() === 'secondary',
          'chat-bubble-accent': variant() === 'accent',
        }"
      >
        <ng-content>...</ng-content>
        @if(button()) {
          <button
            (click)="buttonClick.emit()"
            class="btn btn-xs mx-3">{{button()}}</button>
        }
      </div>
    </div>  `,
  styles: ``
})
export class Bubble {
align = input<'start' | 'end' | undefined>('start')
  variant = input<'primary' | 'accent' | 'secondary' | undefined>('primary')
  button = input()
  buttonClick = output()
}

