import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './body/clientes/clientes.component';
import { FormulariosComponent } from './body/formularios/formularios.component';
import { HomeComponent } from './body/home/home.component';

const routes: Routes = [
  {path: 'formularios', component: FormulariosComponent},
  {path: 'home', component: HomeComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
