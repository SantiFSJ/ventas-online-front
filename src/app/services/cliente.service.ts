import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

import {
    clienteUrl,
} from '../config/api';
import { Cliente } from '../models/cliente';
import { TarjetaDeCredito } from '../models/tarjeta-de-credito';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {  
  
  constructor(private http: HttpClient){}

  getCliente(): Observable<Cliente>{
    return this.http.get<Cliente>(clienteUrl + "/listar"+"/1");
  }

  getTarjetasDeCredito(): Observable<TarjetaDeCredito[]>{
    return this.http.get<TarjetaDeCredito[]>(clienteUrl + "/listar-tarjetas"+"/1");
  }

  getClientes(): Observable<Producto[]>{
    return this.http.get<Producto[]>(clienteUrl);
  }

}