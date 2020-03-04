import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  gender = 'male';
  previewPhoto = false;

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

  saveForm(employeeForm: NgForm): void {
    
  }

}