import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEditCounterMeasureRoutingModule } from './create-edit-counter-measure-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CreateEditCounterMeasureRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateEditCounterMeasureModule { }
