import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  
  categories$;

  constructor(private categorysService: CategoryService) { 
    this.categories$ = this.categorysService.getCategories();
    console.log(this.categories$);
  }

  ngOnInit() {
  }

}
