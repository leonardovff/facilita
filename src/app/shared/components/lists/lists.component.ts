import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
   data: any[any];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLists().subscribe(lists =>{
      this.data = lists;
    })
  }

}
