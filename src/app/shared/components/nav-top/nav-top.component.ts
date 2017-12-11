import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  title: string = "Minhas listas";
  constructor() { }
  ngOnInit() {

  }

}
