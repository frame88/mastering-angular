import { Component, input, model, output, signal } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-animated-card',
  imports: [],
  animations: [
    trigger('collapsable', [
      state('opened', style({
        height: '*'
      })),
      state('closed', style({
        height: 0,
        padding: 0
      })),
      transition('opened <=> closed', [
        animate('0.7s cubic-bezier(0.83, 0, 0.17, 1)')
      ]),
    ])
  ],
  template: `
    <div
      class="cursor-pointer flex justify-between bg-slate-700 text-white p-3"
      (click)="toggle()"
    >
      <h1>{{title()}}</h1>
      @if (icon()) {
        <button
          (click)="iconHandler($event)"
        >{{icon()}}</button>
      }
    </div>

    <div
      [@collapsable]="isOpen() ? 'opened' : 'closed'"
      class="border border-slate-700 overflow-hidden p-3 bg-white text-black"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: ``
})
export class AnimatedCard {
  title = input<string>()
  icon = input<string>()
  isOpen = model(false)
  iconClick = output()

  toggle() {
    this.isOpen.update(prev => !prev)
  }

  iconHandler(event: MouseEvent) {
    event.stopPropagation()
    this.iconClick.emit()
  }
}
