import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from '../first.component';
import { SecondComponent } from '../second.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'First', component: FirstComponent },
  { path: 'Second', component: SecondComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [FirstComponent, SecondComponent]
})
export class AppRoutingModule {}
