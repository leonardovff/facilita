import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
   data: any[any];
  constructor(
    private api: ApiService,
    private route: Router
  ) {
    this.api.needUpdate.subscribe(()=>{
      this.loadData();
    })
    this.loadData();
  }

  ngOnInit() {
  }
  loadData(){
    this.api.getLists().subscribe(lists =>{
      this.data = lists;
    });
  }

}
