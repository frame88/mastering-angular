import { Component, input, output, computed } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-bubble',
  imports: [NgClass],
  template: `
    <div
      class="chat"
      [class]="clsAlign()"
    >
      <div
        class="chat-bubble chat-bubble-secondary"
        [class]="clsVariant()"
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

  clsAlign = computed(() => this.align() === 'start'
    ? 'chat-start'
    : 'chat-end'
  )

  clsVariant = computed(() => {
    switch(this.variant()) {
      case 'accent':
        return 'chat-bubble-accent'
      case 'secondary':
        return 'chat-bubble-secondary'
      case 'primary':
      default:
        return 'chat-bubble-primary'
    }
  })
}

