import { Component, OnInit } from '@angular/core';
import { EmployesService } from 'src/app/services/employes/employes.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  listEmployes: any = []

  constructor(private empServicd: EmployesService) { }

  async ngOnInit(){
    await this.getEmps();
  }

  getEmps() {
    
    this.empServicd.getEmployes().then(
      (data: any) => {
        this.listEmployes = data;
        console.log("datacccccccccc")
        console.log(data)
        
      }
    )
  }

}
