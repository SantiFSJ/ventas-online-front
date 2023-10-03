import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
    categoriaUrl,
} from '../config/api';
import { Categoria } from '../models/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {  

  constructor(private http: HttpClient){}

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(categoriaUrl + "/listar");
  }



}