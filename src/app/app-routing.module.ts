import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ObservableComponent} from "./observable/observable.component";
import {TimerComponent} from "./timer/timer.component";
import {PollingComponent} from "./polling/polling.component";
import {MortgageComponent} from "./mortgage/mortgage.component";

const routes: Routes = [
  {
    path: '',
    component: ObservableComponent
  },
  {
    path: 'lab1',
    component: ObservableComponent
  },
  {
    path: 'lab2',
    component: TimerComponent
  },
  {
    path: 'lab3',
    component: PollingComponent
  },
  {
    path: 'lab4',
    component: MortgageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
