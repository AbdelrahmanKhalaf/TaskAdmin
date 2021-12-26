import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdactComponent } from './prodact.component';

const routes: Routes = [
  {path:"prodacts",component:ProdactComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdactRoutingModule { }
