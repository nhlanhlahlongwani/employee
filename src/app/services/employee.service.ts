import { Injectable } from '@angular/core';
import { Employee} from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [{

    id: 1,
    email: "nhlanhlahlongwani@gmail.com",
    phone: 111
  },
  {
    id: 1,
    email: "nhlanhlahlongwani2@gmail.com",
    phone: 222
  }
  ]
;
  constructor() { }

  onGet(){
    return this.employees;
  }

  onGetEmployee(id: Number){
    return this.employees.find(x=>x.id === id);

  }
  onAdd(employee: Employee){
    this.employees.push(employee);
  }
  onDelete(id: Number){
    let employee = this.employees.find(x=>x.id === id);
    let index = this.employees.indexOf(employee,0);
    this.employees.splice(index,1);
  }

  onUpdate(employee :Employee){

    let oldEmployee = this.employees.find(x=>x.id === employee.id);
    oldEmployee.name = employee.name;
    oldEmployee.email = employee.email;
    oldEmployee.Phone = employee.phone;
  }
} 


}
