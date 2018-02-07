import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-question-overlay',
  template: '<h1>Hello!</h1>',
  styles: [`
    :host {
        display: block;
        background: white;
    }

    h1 {
        margin: 0;
        padding: 1em;
    }
`]
})
export class QuestionOverlayComponent {
  
  
}
