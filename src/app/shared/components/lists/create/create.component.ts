import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ApiService } from './../../../api.service';

@Component({
  selector: 'app-create',
  template: ``,
  styles: []
})
export class CreateComponent implements OnInit {
  id: any = null;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'] ? params['id'] : null;
      if(this.id){
        return this.captureData(this.id);
      }
      setTimeout(()=>{
        this.openDialog();
      },200);
    });
  }
  ngOnInit() {

  }
  openDialog(config = {}) {
    let dialogRef = this.dialog.open(FormComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(result.excluir){
          this.excluir(result.id);
        } else if (result){
          this.save(result);
        }
      }
      this.router.navigate(['/listas']);
    });
    return dialogRef;
  }
  save(data){
    this.api.save(data).subscribe(data => {
      this.api.needUpdate.emit();
    });
  }
  excluir(id: number){
    this.api.excluir(id).subscribe(data => {
      this.api.needUpdate.emit();
    });
  }
  captureData(id){
    this.api.getLists(`\\${id}`).subscribe(list => {
      if(list[0] == null)
        return this.router.navigate(['/listas']);
      this.openDialog({data: list[0]});
    });
  }
}
