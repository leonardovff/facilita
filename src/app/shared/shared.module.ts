import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
    MatProgressSpinnerModule, MatProgressBarModule,
    HttpClientModule
  ],
  entryComponents: [
  ],
  exports: [
    MatAutocompleteModule, MatCheckboxModule, MatTooltipModule, MatPaginatorModule,
    MatMenuModule, MatButtonModule, MatTableModule, MatChipsModule, MatListModule,
    MatSelectModule, MatInputModule, MatTabsModule, MatGridListModule,
    MatRadioModule, MatSliderModule, MatSlideToggleModule, MatSidenavModule,
    MatToolbarModule, MatSnackBarModule, MatDialogModule, MatIconModule, MatCardModule,
    MatProgressSpinnerModule, MatProgressBarModule,
    NavTopComponent, HttpClientModule
  ],
  declarations: [
    NavTopComponent,
    ListsComponent,
    ListComponent
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
