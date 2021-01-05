import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';

// Components
import { DragComponent } from './components/drag/drag.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaisesComponent } from './components/paises/paises.component'

// Para el Virtual Scroll
import { ScrollingModule } from '@angular/cdk/scrolling';
// Para el drag and droi
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    NavbarComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
