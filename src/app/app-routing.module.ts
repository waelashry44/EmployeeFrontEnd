import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
//import { SecretComponent } from './secret/secret.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard], },
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  //{ path: '', component: SecretComponent, canActivate: [AuthGuard], },
  { path: 'login', component: LoginPageComponent,},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
