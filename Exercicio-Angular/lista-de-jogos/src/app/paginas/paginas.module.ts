import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from './../material/material.module';
import { CompartilhadoModule } from './../compartilhado/compartilhado.module';

import { OitavasDeFinalComponent } from './oitavas-de-final/oitavas-de-final.component';
import { FaseDeGruposEHComponent } from './fase-de-grupos-e-h/fase-de-grupos-e-h.component';
import { FaseDeGruposADComponent } from './fase-de-grupos-a-d/fase-de-grupos-a-d.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { TimesInfoComponent } from './informacoes/times-info/times-info.component';


@NgModule({
  declarations: [
    OitavasDeFinalComponent,
    FaseDeGruposEHComponent,
    FaseDeGruposADComponent,
    PaginaNaoEncontradaComponent,
    HomeComponent,
    InformacoesComponent,
    TimesInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CompartilhadoModule
  ]
})
export class PaginasModule { }
