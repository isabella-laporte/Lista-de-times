import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './paginas/home/home.component';
import { InformacoesComponent } from './paginas/informacoes/informacoes.component';
import { PaginaNaoEncontradaComponent } from './paginas/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { FaseDeGruposADComponent } from './paginas/fase-de-grupos-a-d/fase-de-grupos-a-d.component';
import { FaseDeGruposEHComponent } from './paginas/fase-de-grupos-e-h/fase-de-grupos-e-h.component';
import { OitavasDeFinalComponent } from './paginas/oitavas-de-final/oitavas-de-final.component';



const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "informacoes", component: InformacoesComponent},
  {path: "fase-grupos-A-D", component: FaseDeGruposADComponent},
  {path: "fase-grupos-E-H", component: FaseDeGruposEHComponent},
  {path: "oitavas-de-final", component: OitavasDeFinalComponent},
  { path: "", redirectTo: "home", pathMatch:"full"},
  {path: "**", component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
