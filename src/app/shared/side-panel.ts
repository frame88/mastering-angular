import { Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  host: {
    '[class]' : 'getCls()'
  },
  imports: [],
  template: `
    <div class="flex justify-between items-center my-2 py-2 border-b border-slate-400">
      <div class="text-2xl">{{title()}}</div>
      <button (click)="close()">❌</button>
    </div>
    <ng-content></ng-content>
  `,
  styles: ``
})
export class SidePanel {
  title = input.required<string>()
  isOpen = model(true)

  close() {
    this.isOpen.set(false)
  }

  getCls = computed(() => {
    const baseCls = 'fixed w-56 bg-slate-600 top-0 bottom-0 px-3 z-50 transition-all'
    const positionCls = this.isOpen() ? 'left-0' :  '-left-56' ;
    return `${baseCls} ${positionCls}`
  })
}
