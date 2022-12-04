import { Component, OnChanges, OnInit } from '@angular/core';
import Informacoes from 'src/app/interface/Informacoes';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent implements OnInit, OnChanges {
  informacoes: Informacoes[] = [
    {
      time: "Brasil",
      jogadoresFamosos: "Pelé, Romário, Ronaldo, Ronaldinho e Neymar",
      vitorias: [1958, 1962, 1970, 1994, 2002],
      estaNaCopa: true
    },
    {
      time: "Camarões",
      jogadoresFamosos: "Roger Milla",
      estaNaCopa: true
    },
    {
      time: "Sérvia",
      jogadoresFamosos: "Dragan Džajić, Stjepan Bobek, Nemanja Vidic",
      estaNaCopa: true
    },
    {
      time: "Suíça",
      jogadoresFamosos: "Stéphane Chapuisat, Josef Hugi, Heinz Hermann",
      estaNaCopa: true
    }
  ];

  ngOnInit(): void {
    console.log("Lista de informações sobre os times foi criada!");
  }

  ngOnChanges():void {
    console.log("Lista de informações sobre os times foi editada!");
  }
}