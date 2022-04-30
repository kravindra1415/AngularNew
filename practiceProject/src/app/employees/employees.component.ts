import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees: Employee[] = [
    new Employee(1, "Omkar Chaudhari", "Founder & CTO", "./assets/omkar.jpg"),
    new Employee(2, "Rakesh Vartak", "Chief Executive Officer", "./assets/rakesh.png"),
    new Employee(3, "Kirti Kulkarni", "Product R&D Head", "./assets/kirti.png"),
    new Employee(4, "Sonal Karandikar", "Account Manager", "./assets/sonal.jpg"),
    new Employee(5, "Nilesh Golecha", "Accounts", "./assets/nilesh.jpg"),
    new Employee(6, "Darshan Bari", "Office Admin", "./assets/darshan.png"),
   
  ]
}

class Employee {
  empId: number;
  empName: string;
  empDesc: string;
  empImage: any

  constructor(empId: number, empName: string, empDesc: string, empImage: any) {
    this.empId = empId;
    this.empName = empName;
    this.empDesc = empDesc;
    this.empImage = empImage
  }
}