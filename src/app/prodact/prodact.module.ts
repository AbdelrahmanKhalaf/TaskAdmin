import { ProdactComponent } from './prodact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdactRoutingModule } from './prodact-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ProdactComponent
  ],
  imports: [
    CommonModule,
    ProdactRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ]
})
export class ProdactModule { }
