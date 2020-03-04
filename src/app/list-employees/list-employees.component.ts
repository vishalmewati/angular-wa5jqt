import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  

  employees: Employee[] = [
{
 id: 1,
 name: 'vishal mewati',
 gender: 'male',
 email: 'mewati@gmail.com',
 phoneNumber: 9892695698
},

{
  id: 2,
 name: 'Hitesh mewati',
 gender: 'male',
 email: 'mewatih@gmail.com',
 phoneNumber: 98626695698
},

{
  id: 3,
 name: 'harshil Cheda',
 gender: 'male',
 email: 'chedah@gmail.com',
 phoneNumber: 95692695698
}
  ];

}