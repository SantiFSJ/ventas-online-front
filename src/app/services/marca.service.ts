import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
    marcaUrl,
} from '../config/api';
import { Marca } from '../models/marca';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {  

  constructor(private http: HttpClient){}

  getMarcas(): Observable<Marca[]>{
    return this.http.get<Marca[]>(marcaUrl + "/listar");
  }

}