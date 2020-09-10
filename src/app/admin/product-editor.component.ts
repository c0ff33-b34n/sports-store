import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent {
  editing = false;
  product = new Product();

  constructor(private productRepo: ProductRepository,
              private router: Router,
              activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params.mode === 'edit';
    if (this.editing) {
      Object.assign(this.product, productRepo.getProduct(+activeRoute.snapshot.params.id));
    }
  }

  save(form: NgForm) {
    this.productRepo.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

}
