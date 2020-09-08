import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  public selectedCategory = null;

  constructor(private productRepo: ProductRepository) { }

  get products(): Product[] {
    return this.productRepo.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
    return this.productRepo.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
}
