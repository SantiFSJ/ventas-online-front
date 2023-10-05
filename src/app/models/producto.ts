import { Injectable } from "@angular/core";
import { Categoria } from "./categoria";
import { Marca } from "./marca";
import { GenericModel } from "./generic-model";

@Injectable({
    providedIn: 'root',
  })
export class Producto extends GenericModel{
    codigo: string;
    descripcion: string;
    categoria: Categoria;
    marca: Marca;
    precio: number;
    version: number;
    
}
