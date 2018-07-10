import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/product/product.service';

@Component({
  selector: 'app-product-list',
  //selector: './product-list.component.ts',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	
	products: Array<any>;
  
  constructor(private productService: ProductService) { }




  ngOnInit() {
	  this.ProductService.getAll().subscribe(data => {
      this.products = data;
	  });
  }

}
