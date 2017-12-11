import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './shared/components/lists/lists.component';
import { CreateComponent } from './shared/components/lists/create/create.component';
const appRoutes: Routes = [
  { path: 'listas', component: ListsComponent, children: [
      { path: 'add', component:  CreateComponent},
      { path: 'edit/:id', component: CreateComponent }
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
