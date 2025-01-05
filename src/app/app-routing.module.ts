import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempConversionComponent } from './temp-conversion/temp-conversion.component';

const routes: Routes = [{
  path: '', component: TempConversionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
