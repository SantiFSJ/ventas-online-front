import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

import {
  productoUrl,
} from '../config/api';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {  

  constructor(private http: HttpClient){}

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(productoUrl + "/listar");
  }

  findById(id: string): Observable<Producto>{
    return this.http.get<Producto>(productoUrl + "/listar/" + id);
  }

}