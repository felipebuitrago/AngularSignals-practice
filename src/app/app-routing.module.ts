import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ruta1Component } from './ruta1/ruta1.component';

const routes: Routes = [{path:"/ruta1",component:Ruta1Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
