import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './shared/components/lists/lists.component';
const appRoutes: Routes = [
  { path: 'listas', component: ListsComponent, children: [
  //     { path: 'add', component:  TasksFormComponent},
  //     { path: ':id/edit', component: TasksFormComponent }
  ]},
  // { path: '', component: TasksListComponent}
  {path: '**', redirectTo: 'listas'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
