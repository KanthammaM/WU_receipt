import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { SendFlowComponent } from './components/send-flow/send-flow.component';

export const routes: Routes = [
  {
    path: '',
    component: SendFlowComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }