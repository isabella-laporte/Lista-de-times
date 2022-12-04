import { Component, Input, OnChanges } from '@angular/core';
import Informacoes from 'src/app/interface/Informacoes';

@Component({
  selector: 'app-times-info',
  templateUrl: './times-info.component.html',
  styleUrls: ['./times-info.component.css']
})
export class TimesInfoComponent implements OnChanges{

  @Input() informacoes?: Informacoes;

  constructor() {
  
  }

  mudancaStatus(): void {
    if (this.informacoes) this.informacoes.estaNaCopa = !this.informacoes?.estaNaCopa;
  }

  mudancaCor(): string {
    return this.informacoes?.estaNaCopa? "#5b8fe3": "#616a78";
  }

  ngOnChanges(): void {
    console.log("Lista de informações sobre os times foi editada!");
  }
}
