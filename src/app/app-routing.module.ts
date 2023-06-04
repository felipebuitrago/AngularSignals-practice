import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ruta1Component } from './ruta1/ruta1.component';
import { Practice1SignalComponent } from './practice1-signal/practice1-signal.component';
import { Practice2SignalComponent } from './practice2-signal/practice2-signal.component';

const routes: Routes = [
  {
    path : 'ruta1', component : Ruta1Component
  },
  {
    path : 'practice1Signals', component : Practice1SignalComponent
  },
  {
    path : 'practice2Signals', component : Practice2SignalComponent
  },
  {
    path : 'signals', 
    loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule)
  },
  {
    path : '**', 
    redirectTo: 'practice1Signals'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
