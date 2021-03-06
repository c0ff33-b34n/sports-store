import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { HttpClientModule } from '@angular/common/http';
import { RestDatasource } from '../rest.datasource';
import { AuthService } from './auth.service';
import { ConnectionService } from './connection.service';


@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository,
              {provide: StaticDataSource, useClass: RestDatasource},
              RestDatasource, AuthService, ConnectionService]
})
export class ModelModule { }
