import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  CategoryList: any = [];

  constructor(private apiCatService: CategoriesService) { }

  async ngOnInit() {
    await this.getCategories();
  }

  getCategories() {

    this.apiCatService.getCategories().then(
      (data) => {
        this.CategoryList = data;
        console.log("datacccccccccc")
        console.log(data)

      }
    )
  }

  // getDataProducts() {

  //   this._apiService.getDataCategory().then(
  //     (data: any) => {
  //       this.result =data;
  //       console.log("datacccccccccc")
  //       console.log(data)
  //       this.productList = data.products
  //       this.categoryList = data.categories
  //       console.log("this.categoryList")
  //       console.log(this.categoryList)
  //       console.log("this.productList")
  //       console.log(this.productList)

  //     }
  //   )
  // }
}
