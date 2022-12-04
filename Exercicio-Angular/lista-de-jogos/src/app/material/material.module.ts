import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
