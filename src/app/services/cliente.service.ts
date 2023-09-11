import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

import {
    clienteUrl,
} from '../config/api';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {  
  
  constructor(private http: HttpClient){}

  getClientes(): Observable<Producto[]>{
    return this.http.get<Producto[]>(clienteUrl);
  }

}