import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenceDocComponent } from './reference-doc.component';

const routes: Routes = [
  {path:"",component:ReferenceDocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceDocRoutingModule { }
