import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { RouterModule,Routes } from '@angular/router';

const appRoutes : Routes = [
  {path: 'list', component: ListEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: '',redirectTo: '/list',pathMatch: 'full'}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ListEmployeesComponent, CreateEmployeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
