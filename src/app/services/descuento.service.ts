import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

import {
    descuentoUrl,
} from '../config/api';
import { Descuento } from '../models/descuento';


@Injectable({
  providedIn: 'root'
})
export class DescuentoService {  
  
  constructor(private http: HttpClient){}

  getDescuentos(): Observable<Descuento[]>{
    return this.http.get<Descuento[]>(descuentoUrl + "/listar");
  }

}