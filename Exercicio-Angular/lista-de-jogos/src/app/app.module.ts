import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { MaterialModule } from './material/material.module';
import { PaginasModule } from './paginas/paginas.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialModule,
    PaginasModule,
    CompartilhadoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
