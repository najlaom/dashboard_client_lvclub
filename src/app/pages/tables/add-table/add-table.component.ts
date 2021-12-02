import { Component, OnInit } from '@angular/core';
import { TablesService } from 'src/app/services/tables/tables.service';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {

  table: any = {}

  constructor(private _apiTableService: TablesService) { }

  async ngOnInit() {
   
  }

  addTable() {

    console.log("this.product add prod")
    console.log(this.table)

    this._apiTableService.addTable(this.table).subscribe(
      (data) => {
        console.log(data);
        // this.router.navigateByUrl('/fournisseurs', { skipLocationChange: true })
      },
      error => {
        console.log(error)
      });
  }

}
