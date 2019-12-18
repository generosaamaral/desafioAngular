import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { UserListComponent } from './User-list/user-list.component';
import {BuscarComponent} from './buscar/buscar.component';
import {TarefasComponent} from './tarefas/tarefas.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:'home', component: HomeComponent},
  {path:'buscar', component:BuscarComponent},
  {path:'listagem', component: UserListComponent},
  {path:'tarefas', component: TarefasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
