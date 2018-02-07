import { OverlayRef } from '@angular/cdk/overlay';

export class QuestionOverlayRef {

  constructor(public overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}
