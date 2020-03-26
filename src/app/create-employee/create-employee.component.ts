import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { ListEmployeesComponent } from '../list-employees/list-employees.component';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  gender = 'male';
  previewPhoto = false;

  employees : Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    dateOfBirth: null,
    photoPath: null,
    isActive: null
  };


  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  departments: Department[] = [
    {id: 1,name: 'HelpDesk'},
    {id: 2,name: 'Operations'},
    {id: 3,name: 'IT'},
    {id: 4,name: 'PayRoll'}
  ];

  constructor() { }

  ngOnInit() {
  }

  saveForm(employeeForm: Employee): void {
    console.log(employeeForm);
  }

}