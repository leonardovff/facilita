import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatCheckboxModule, MatTooltipModule, MatPaginatorModule, MatMenuModule,
  MatButtonModule, MatTableModule, MatChipsModule, MatSelectModule, MatInputModule, MatTabsModule, MatListModule,
  MatGridListModule, MatRadioModule, MatSliderModule, MatSlideToggleModule, MatSidenavModule, MatToolbarModule,
  MatSnackBarModule, MatDialogModule, MatIconModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule
} from '@angular/material';

import { ApiService } from './api.service'
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { ListsComponent } from './components/lists/lists.component';
import { ListComponent } from './components/lists/list/list.component';
import { CreateComponent } from './components/lists/create/create.component';
import { FormComponent } from './components/lists/create/form/form.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule, MatCheckboxModule, MatTooltipModule, MatPaginatorModule,
    MatMenuModule, MatButtonModule, MatTableModule, MatChipsModule, MatListModule,
    MatSelectModule, MatInputModule, MatTabsModule, MatGridListModule,
    MatRadioModule, MatSliderModule, MatSlideToggleModule, MatSidenavModule,
    MatToolbarModule, MatSnackBarModule, MatDialogModule, MatIconModule, MatCardModule,
    MatProgressSpinnerModule, MatProgressBarModule
  ],
  entryComponents: [
    FormComponent
  ],
  exports: [
    MatAutocompleteModule, MatCheckboxModule, MatTooltipModule, MatPaginatorModule,
    MatMenuModule, MatButtonModule, MatTableModule, MatChipsModule, MatListModule,
    MatSelectModule, MatInputModule, MatTabsModule, MatGridListModule,
    MatRadioModule, MatSliderModule, MatSlideToggleModule, MatSidenavModule,
    MatToolbarModule, MatSnackBarModule, MatDialogModule, MatIconModule, MatCardModule,
    MatProgressSpinnerModule, MatProgressBarModule,
    NavTopComponent
  ],
  declarations: [
    NavTopComponent,
    ListsComponent,
    ListComponent,
    CreateComponent,
    FormComponent
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
