import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  isEdit:boolean = false;
  constructor(
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FormComponent>
  ) {
    this.form = fb.group({
      id: [null],
      name: ['', [Validators.required]],
      is_shared: [false],
      data_remember: [''],
      notification_after_id: [null, []],
      tags: [null],
      value_max: [null],
      value_min: []
    });
    if(data){
      this.isEdit = true;
      this.form.setValue(data);
    }
  }

  ngOnInit() {
  }

}
