import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ruta1Component } from './ruta1/ruta1.component';
import { Practice1SignalComponent } from './practice1-signal/practice1-signal.component';
import { Practice2SignalComponent } from './practice2-signal/practice2-signal.component';

@NgModule({
  declarations: [
    AppComponent,
    Ruta1Component,
    Practice1SignalComponent,
    Practice2SignalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
