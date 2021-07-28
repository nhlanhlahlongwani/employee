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
}
