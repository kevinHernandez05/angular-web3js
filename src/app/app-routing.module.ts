import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: async () => (await import('./dashboard/dashboard/dashboard.module')).DashboardModule,
  },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
