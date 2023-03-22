import { UsersReadComponent } from './components/users/users-read/users-read.component';
import { UsersCreateUpdateComponent } from './components/users/users-create-update/users-create-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { UsersCrudComponent } from './views/users-crud/users-crud.component';

const routes: Routes = [{
  path: "",
  component: DashboardComponent
},
{
  path: "users",
  component: UsersCrudComponent
},
{
  path: "users/create",
  component: UsersCreateUpdateComponent
},
{
  path: "users/update/:id",
  component: UsersCreateUpdateComponent
},
{
  path: "users/delete/:id",
  component: UsersReadComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }