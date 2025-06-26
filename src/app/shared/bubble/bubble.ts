import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-bubble',
  imports: [],
  template: `
  <div class="chat chat-start">
    <div class="chat-bubble">
      <ng-content>...</ng-content> 
      <!-- valore di default -->
      <button 
        class="btn btn-xs"
        (click)="buttonClick.emit()"
        >
        {{button()}}
      </button>
    </div>
  </div>
  `,
  styles: ``
})
export class Bubble {
 button = input('');
 buttonClick = output();
}
