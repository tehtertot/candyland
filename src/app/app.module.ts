import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
// import { QuestionOverlayComponent } from './display/question-overlay.component';

// import { QuestionOverlayService } from './question-overlay.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
