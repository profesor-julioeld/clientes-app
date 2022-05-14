import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component'
import { ClientesComponent } from './clientes/clientes.component'

const routes: Routes = [
  {path:'',redirectTo:'/clientes',pathMatch:'full'},
  {path:'directiva',component:DirectivaComponent},
  {path:'clientes',component:ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
