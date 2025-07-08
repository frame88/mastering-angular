import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
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

    @if (isOpen()) {
      <div class="border border-slate-700 p-3 bg-white text-black">
        <ng-content></ng-content>
      </div>
    }
  `,
  styles: ``
})
export class Card {
  title = input<string>()
  icon = input<string>()
  iconClick = output()
  isOpen = signal(false)

  toggle() {
    this.isOpen.update(prev => !prev)
  }

  iconHandler(event: MouseEvent) {
    event.stopPropagation()
    this.iconClick.emit()
  }
}
