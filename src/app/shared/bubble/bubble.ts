import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble',
  imports: [],
  template: `
  <div class="chat chat-start">
    <div class="chat-bubble">
      <ng-content>...</ng-content> 
      <!-- valore di default -->
    </div>
  </div>
  `,
  styles: ``
})
export class Bubble {

}
