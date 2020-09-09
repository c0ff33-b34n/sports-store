import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';



@NgModule({
  declarations: [StoreComponent, CounterDirective],
  imports: [
    ModelModule, BrowserModule, FormsModule
  ],
  exports: [StoreComponent]
})
export class StoreModule { }
