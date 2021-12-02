import { Component, OnInit } from '@angular/core';
import { TablesService } from 'src/app/services/tables/tables.service';

@Component({
  selector: 'app-list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.css']
})
export class ListTablesComponent implements OnInit {

  listTable: any = []
  constructor(private _apiTableService: TablesService) { }

  async ngOnInit() {
    await this.getTables();
  }

 
  getTables() {

    this._apiTableService.getTables().then(
      (data) => {
        this.listTable = data;
        console.log("datacccccccccc")
        console.log(data)

      }
    )
  }
}
