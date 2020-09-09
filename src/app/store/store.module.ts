import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary.component';
import { CartDetailComponent } from './cart-detail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  imports: [
    ModelModule, BrowserModule, FormsModule, RouterModule
  ],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }
