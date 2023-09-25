import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venta } from '../models/venta';
import { ventaUrl } from '../config/api';

@Injectable({
    providedIn: 'root'
  })

  export class VentaService {  
    
    constructor(private http: HttpClient){}
  
    createVenta(venta: Venta): Observable<Venta>{
      return this.http.post<Venta>(ventaUrl+'/crear', venta);
    }

    calcularMonto(venta: Venta): Observable<number>{
      return this.http.post<number>(ventaUrl+'/calcular-monto', venta);
    }

  }