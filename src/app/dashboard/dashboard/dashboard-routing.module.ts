import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptotableComponent } from '../cryptotable/cryptotable.component';

const routes: Routes = [
  {path: '', component: CryptotableComponent},
  {path: 'dashboard', component: CryptotableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
