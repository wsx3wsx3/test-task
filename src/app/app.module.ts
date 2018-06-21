import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyEditorGridModule } from './property-editor-grid/property-editor-grid.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PropertyEditorGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
