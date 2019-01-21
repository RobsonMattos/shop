import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/categoria.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  // categorias: Categoria[];

  constructor(private categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
    // this.dataState(); // Initialize student's list, when component is ready
    // let s = this.categoryService.getCategories();
    // s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
    //   this.categorias = [];
    //   data.forEach(item => {
    //     let a = item.payload.toJSON();
    //     a['$key'] = item.key;
    //     this.categorias.push(a as Categoria);
    //   })
    // });
    // console.log(this.categorias);
  }
}
