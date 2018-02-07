import { Injectable, Inject } from "@angular/core";
import { Overlay, OverlayConfig } from "@angular/cdk/overlay";
import { QuestionOverlayComponent } from "./display/question-overlay.component";
import { ComponentPortal } from "@angular/cdk/portal";
import { QuestionOverlayRef } from "./display/question-overlay-ref";
import { OverlayRef } from "@angular/cdk/overlay";

interface QuestionOverlayConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
}

const DEFAULT_CONFIG: QuestionOverlayConfig = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel'
  }

@Injectable()
export class QuestionOverlayService {
    constructor(private _overlay: Overlay) {}

    show(config: QuestionOverlayConfig = {}) {
        const dialogConfig = { ...DEFAULT_CONFIG, ...config};
        const overlayRef = this.createOverlay(dialogConfig);
        const dialogRef = new QuestionOverlayRef(overlayRef);
        const questionOverlayPortal = new ComponentPortal(QuestionOverlayComponent);
        overlayRef.attach(questionOverlayPortal);
        return dialogRef;
    }

    private createOverlay(config: QuestionOverlayConfig) : OverlayRef {
        const overlayConfig = this.getOverlayConfig(config);
        return this._overlay.create(overlayConfig);
    }

    private getOverlayConfig(config: QuestionOverlayConfig): OverlayConfig {
        const positionStrategy = this._overlay.position()
          .global()
          .centerHorizontally()
          .centerVertically();
    
        const overlayConfig = new OverlayConfig({
          hasBackdrop: config.hasBackdrop,
          backdropClass: config.backdropClass,
          panelClass: config.panelClass,
          scrollStrategy: this._overlay.scrollStrategies.block(),
          positionStrategy
        });
    
        return overlayConfig;
    }
}