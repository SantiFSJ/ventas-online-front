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

  update(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(productoUrl + "/actualizar",producto);
  }

  findById(id: string): Observable<Producto>{
    return this.http.get<Producto>(productoUrl + "/listar/" + id);
  }

}