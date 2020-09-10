import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './model/product.model';
import { Order } from './model/order.model';


const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDatasource {
    baseUrl: string;
    authToken: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + 'products');
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + 'orders', order);
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + 'login', {
            name: user, password: pass
        }).pipe(map(response => {
            this.authToken = response.success ? response.token : null;
            return response.success;
        }));
    }
}
