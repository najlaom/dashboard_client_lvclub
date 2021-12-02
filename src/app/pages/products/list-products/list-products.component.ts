import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private apiProductService: ProductsService) { }

  listProducts: any = []

  async ngOnInit() {
    await this.getProducts()
  }

  getProducts() {
    
    this.apiProductService.getProducts().then(
      (data: any) => {
        this.listProducts = data;
        console.log("datacccccccccc")
        console.log(data)
        
      }
    )
  }


}
