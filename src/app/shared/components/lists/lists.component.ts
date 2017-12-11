import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
   data: [any] = [
    {
      name: "Tuning em chevette",
      valueMin: 100.01,
      valueMax: 293,
      dateRemember: null,
      tags:['Automotivo']
    },
    {
      name: "Feira mensal",
      valueMin: 400.01,
      valueMax: 443,
      dateRemember: '03/08',
      tags:['Alimentação','Feira']
    },
    {
      name: "Churrasco fim de semana",
      valueMin: 200,
      valueMax: 291,
      dateRemember: '17/12',
      tags:['Alimentação'],
    },
    {
      name: "PC Gammer - presente de natal",
      valueMin: 1600,
      valueMax: 1843,
      dateRemember: '24/12',
      tags:['Hardware'],
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
