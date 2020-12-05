import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './other/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },
  { path: 'login', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },
  { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
